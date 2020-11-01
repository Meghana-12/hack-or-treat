import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SlotMachine from './SlotMachine/slot';
import Button from '@material-ui/core/Button';
import {quotes} from './Spookytext/text'

const useStyles = makeStyles((theme) => ({
    root: {
      // width: "50%",
      display : "flex",
      flexWrap : "wrap",
      justifyContent: "space-around",
      alignItems: "center",
    },
    slot : {
      flexGrow: 1,
      alignContent: "center",
    },
    texts : {
      flexGrow: 1,
      alignContent: "center",
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
      <div className={classes.root} style={{margin:0, padding:0}} >
        <Grid 
        container  
        justify="space-around" 
        alignItems="center"
        wrap="wrap"
        >
            <Grid item className={classes.slot}>
                <SlotMachine/>
            </Grid>
            <Grid item class>
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
            </Grid>        
        </div>
        );
      }
      