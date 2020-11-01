import React from "react";
import Nav from "./Components/nav";
import Spider from "./Components/Spider/spider";
import Pumpkin from "./Components/Pumpkin/pumpkin";
import Ghost from "./Components/Ghost/ghost";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./Components/home";
import Artists from './Components/artists';
import WebApp from './Components/WebCam/webApp';
import theme from "./theme";
import TextNSlot from './Components/textNslot';

const Layout = () => {
  return (
    <Switch>
    <Container fluid style={{ margin: "0", padding: "0" }} maxWidth="xl">
      <ThemeProvider theme={theme}>
      <Spider />
      <Ghost />
      <Pumpkin />
        <CssBaseline />
        <Nav />
        <Home title="Section 1" id="section1"/>
        <div style={{display:"flex", justifyContent:"center"}}>
        <WebApp title="Section 2" id="section2"/>
        </div>
        <TextNSlot title="Section 3" id="section2"/>
        <Artists title="Section 4" id="section4"/>
      </ThemeProvider>
    </Container>
    </Switch>
  );
};

export default Layout;
