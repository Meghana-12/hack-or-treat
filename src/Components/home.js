import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getThemeProps } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import { sizing } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
      width: "100vh",
      height:"30rem",
      backgroundColor:"#200236",
      overflow:"hidden",
      // margin:0,
      // left:0,
    },
  }));

export default function Home() {
    const classes = useStyles();
  
    return (
        <div className={classes.root} >
          <Grid container>
          {/* <Box display='flex' flex='1' justifyContent='space-around'> */}
            {/* <Container fixed="false" style={{backgroundColor:"#200236", color: "white",}}> */}
            content={[...new Array(50)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
          )
          .join('\n')}
          {/* </Container> */}
          {/* </Box> */}
          </Grid>
        </div>
  );
}
