import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getThemeProps } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import { sizing } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import house from '../Images/house.png';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      width: "auto",
      height:"45rem",
      backgroundColor:"#200236",
      overflow:"hidden",
      // margin:0,
      // left:0,
    },
  }));

export default function Home() {
    const classes = useStyles();
  
    return (
      <div className={classes.root} style={{margin:"0", padding:"0"}} >
        <Grid 
        container fluid 
        direction="row" justify="space-between" alignItems="center"
        spacing= {6}
        style={{margin:"0", padding:"0"}}

        >
          <Grid item xs={12} sm={6} alignItems="flex-start" >
            <img src={house}/>
          </Grid>
          <Grid item xs={12} sm={6}  alignItems="center" >
            <Typography variant="h1" style={{color:"#AF4B00"}}>
              Halloween's  HERE
              </Typography>
          </Grid>
            
        </Grid>
        </div>
  );
}
