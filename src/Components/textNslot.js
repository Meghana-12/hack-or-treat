import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SlotMachine from './SlotMachine/slot';
import Button from '@material-ui/core/Button';
import {quotes} from './Spookytext/text';
import { GiSpiderWeb } from 'react-icons/gi';

const useStyles = makeStyles((theme) => ({
    root: {
      // width: "100vw",
      // display : "flex",
      // flexWrap : "wrap",
      // justifyContent: "center",
      // alignItems: "center",
      // margin: 10,
      padding: 70,
    },
    slot : {
      // flexGrow: 1,
      // alignContent: "center",
    },
    texts : {
      // flexGrow: 1,
      // alignContent: "center",
    }
  }));
function genQuote() {
    var randNum = Math.floor(Math.random() * 8) + 1;
    return quotes[randNum];
  } 
export default function TextNSlot() {
    const classes = useStyles();
    const [text, setText] = React.useState(genQuote())
    return (
      <div className={classes.root}>
        <div style={{alignContent:"center"}}>
        <Typography variant="h1" color= "secondary"> Trick or Treat ?
        <GiSpiderWeb style={{marginLeft: "15px"}} color="orange"/></Typography>
        </div>
        <Grid container spacing={3} style={{alignItems:"baseline"}}>
            
            <Grid item xs={6}>
              <div>
                <Typography variant="body2" className={classes.texts}>
                    {text}
                </Typography>
              </div>
              <div>
                <Button color="secondary" onClick={()=> {
                      var randNum = Math.floor(Math.random() * 8) + 1;
                      setText(quotes[randNum])
                    }}>More</Button>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className={classes.slot}><SlotMachine/></div>
            </Grid>   
          </Grid>   
        </div>
        );
      }
      