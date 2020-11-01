import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from './card.js';
import { makeStyles } from '@material-ui/core/styles';
// import bg1 from '../Images/bg1.jpg';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      width: "auto",
      height:"45rem",
    //   backgroundColor:"#200236",
      zIndex:3,
      overflow:"hidden",
      margin:100,
      top:0,
    },
  }));
export default function Artists(){
    const classes = useStyles();
  return(
    <div className={classes.root} 
    // style={{backgroundImage:{bg1}}}
    >
      <div style={{display:"flex", justifyContent:"center", margin:"5rem"}}>
        <Typography variant="h1" color= "secondary"> Artists </Typography>
      </div>
    <Grid container justify="center" wrap="wrap" style={{overflow:"hidden"}}>
      {/* <Grid item xs={3}> */}
      <div>
        <Card
        name = "Meghana Varanasi"
        img= "https://firebasestorage.googleapis.com/v0/b/hack-or-treat-e41fc.appspot.com/o/meghana.png?alt=media&token=9fd7b67c-e68e-4b23-b469-58d42467ae3f"
        github="https://github.com/Meghana-12"
        linkedin="https://www.linkedin.com/in/varanasi-meghana-1671b1192/"
        />
        </div>
      {/* </Grid> */}
      {/* <Grid item xs={3}> */}
      <div style={{paddingTop:"40px"}}>
        <Card
        name = "Prahitha Movva"
        img= "https://firebasestorage.googleapis.com/v0/b/hack-or-treat-e41fc.appspot.com/o/prahitha.png?alt=media&token=e43278b1-1cdc-447c-ad95-3ba5dcfd47f1"
        github="https://github.com/Prahitha"
        linkedin="https://www.linkedin.com/in/prahitha-movva/"
        />
        </div>
      {/* </Grid>    */}
      {/* <Grid item xs={3}> */}
      <div >
      <Card
        name = "Shreya Gundu"
        img= "https://firebasestorage.googleapis.com/v0/b/hack-or-treat-e41fc.appspot.com/o/shreya.png?alt=media&token=2efb5dfb-3a00-4607-a6b2-fc45cc18e8c2"
        github="https://github.com/Shreyagundu"
        linkedin="https://www.linkedin.com/in/shreya-gundu-645409183/"
        />
        </div>
      {/* </Grid> */}
      {/* <Grid item xs={3}> */}
      <div style={{paddingTop:"40px"}}>
      <Card
        name = "Michael Yoger"
        img= "https://firebasestorage.googleapis.com/v0/b/hack-or-treat-e41fc.appspot.com/o/michael.png?alt=media&token=bd63c3ac-6cd6-40d1-8392-91e99998507a"
        github="https://github.com/MichaelYogar"
        linkedin="https://www.linkedin.com/in/michaelyogar/"
        />
        </div>
      {/* </Grid> */}
    </Grid>
    </div>
  )
}