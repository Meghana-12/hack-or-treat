import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from './card.js';
import { makeStyles } from '@material-ui/core/styles';
import bg1 from '../Images/bg1.jpg';

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
    <div className={classes.root} style={{backgroundImage:{bg1}}}>
    <Grid container justify="center" wrap="wrap" style={{overflow:"hidden"}}>
      {/* <Grid item xs={3}> */}
      <div>
        <Card
        name = "Meghana Varanasi"
        img= "https://ca.slack-edge.com/T01B9HM9QE4-U01D6G1D47N-928656d6c1e7-512"
        github="https://github.com/Meghana-12"
        linkedin="https://www.linkedin.com/in/varanasi-meghana-1671b1192/"
        />
        </div>
      {/* </Grid> */}
      {/* <Grid item xs={3}> */}
      <div style={{paddingTop:"40px"}}>
        <Card
        name = "Prahitha Movva"
        img= ""
        github=""
        linkedin=""
        />
        </div>
      {/* </Grid>    */}
      {/* <Grid item xs={3}> */}
      <div >
      <Card
        name = "Shreya Gundu"
        img= ""
        github=""
        linkedin=""
        />
        </div>
      {/* </Grid> */}
      {/* <Grid item xs={3}> */}
      <div style={{paddingTop:"40px"}}>
      <Card
        name = "Michael Yoger"
        img= ""
        github=""
        linkedin=""
        />
        </div>
      {/* </Grid> */}
    </Grid>
    </div>
  )
}