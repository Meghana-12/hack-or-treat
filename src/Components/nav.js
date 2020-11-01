import { Link } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import ButtonSpl from "./button";
import Button from "@material-ui/core/Button";
import Music from "./MusicPlayer/music.js";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    overflow: "none",
  },
  toolbar: {
    justifyContent: "space-between",
  },
  toTop: {
    posiiton: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  music : {
    overflow:"hidden",
  }
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BackToTop(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <Typography variant="body1">Halloween's Here!</Typography>
          <span>
            <Button color="secondary">
              <Typography
                variant="body2"
                component="h2"
                style={{ textTransform: "none", padding: "15px" }}
              >
                Home
              </Typography>
            </Button>
            <Button color="secondary">
              <Typography
                variant="body2"
                style={{ textTransform: "none", padding: "15px" }}
              >
                Gallery
              </Typography>
            </Button>
            <Button color="secondary">
              <Typography
                variant="body2"
                style={{ textTransform: "none", padding: "15px" }}
              >
                Cam
              </Typography>
            </Button>
            <Link to="/games">
            <Button color="secondary">
              <Typography
                variant="body2"
                style={{ textTransform: "none", padding: "15px" }}
              >
                Games
              </Typography>
            </Button>
            </Link>
            <Button color="secondary">
              <Typography
                variant="body2"
                style={{ textTransform: "none", padding: "15px" }}
              >
                Artists
              </Typography>
            </Button>
          </span>
          <Grid className={classes.music} style={{display:"flex"}}>
            <div> <Music/></div>
          <div> <ButtonSpl> Sign Up! </ButtonSpl></div>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box my={2}>
          <Typography variant="body2">{props.children}</Typography>
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top" className={classes.toTop}>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
