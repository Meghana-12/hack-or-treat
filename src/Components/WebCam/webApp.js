import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      // // width: "auto",
      // height:"45rem",
      // backgroundColor:"#200236",
      // overflow:"hidden",
      padding:"auto",
      alignSelf: "center",
      // top:0,
    },
  }));
  
  
export default function WebApp() {
    const classes = useStyles();
    
    React.useEffect(() => {
      const video = document.querySelector('#camera-stream');
      const hiddenCanvas = document.querySelector('#hidden-canvas');
      const outputCanvas = document.querySelector('#output-canvas');
      const hiddenContext = hiddenCanvas.getContext('2d');
      const outputContext = outputCanvas.getContext('2d');

      const constraints = {
        video: {
          width: 400,
          height: 400,
        },
      };

      const getAverageRGB = (frame) => {
        const length = frame.data.length / 4;

        let r = 0;
        let g = 0;
        let b = 0;

        for (let i = 0; i < length; i++) {
          r += frame.data[i * 4 + 0];
          g += frame.data[i * 4 + 1];
          b += frame.data[i * 4 + 2];
        }

        return {
          r: r / length,
          g: g / length,
          b: b / length,
        };
      };

      const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&()/\\+<>';

      const processFrame = () => {
        const fontHeight = 12;
        const { videoWidth: width, videoHeight: height } = video;

        if (width && height) {
          hiddenCanvas.width = width;
          hiddenCanvas.height = height;
          outputCanvas.width = width;
          outputCanvas.height = height;
          hiddenContext.drawImage(video, 0, 0, width, height);

          outputContext.textBaseline = 'top';
          outputContext.font = `${fontHeight}px Consolas`;

          const text = outputContext.measureText('@');
          const fontWidth = parseInt(text.width);

          outputContext.clearRect(0, 0, width, height);

          for (let y = 0; y < height; y += fontHeight) {
            for (let x = 0; x < width; x += fontWidth) {
              const frameSection = hiddenContext.getImageData(x, y, fontWidth, fontHeight);
              const { r, g, b } = getAverageRGB(frameSection);
              const randomCharacter = charset[Math.floor(Math.random() * charset.length)];

              outputContext.fillStyle = `rgb(${r},${g},${b})`;
              // outputContext.fillStyle = "rgb(187,68,0)";
              // outputContext.fillRect(x, y, fontWidth, fontHeight);
              outputContext.fillText(randomCharacter, x, y);
            }
          }
        }

        window.requestAnimationFrame(processFrame);
      };

      navigator.getUserMedia(constraints, function (stream) {
        video.srcObject = stream;
        video.play();
      }, function (err) {
        console.error(err);
      });

      video.addEventListener('play', function () {
        window.requestAnimationFrame(processFrame);
        console.log('Live!');
      });
    });

    return (
        // <Grid
        // justify="space-around"
        // className={classes.root}
        // >
        <div className={classes.root}>
          <div style={{display:"flex", justifyContent:"center", margin:"5rem"}}>
          <Typography variant="h1" color="secondary"> Spooky Cam</Typography>
          </div>
          <video id="camera-stream"></video>
          <canvas id="hidden-canvas"></canvas>
          <canvas id="output-canvas"></canvas>
        </div>
        // {/* <script src="./script.js"></script> */}
        // </Grid>
    )
}