import React from "react";
import Nav from "./Components/nav";
import Spider from "./Components/Spider/spider";
import Pumpkin from "./Components/Pumpkin/pumpkin";
import Ghost from "./Components/Ghost/ghost";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./Components/home";
import theme from "./theme";
const Layout = () => {
  return (
    <Container fluid style={{ margin: "0", padding: "0" }} maxWidth="xl">
      <Spider />
      <Ghost />
      <Pumpkin />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav>
          <Home />
        </Nav>
      </ThemeProvider>
    </Container>
  );
};

export default Layout;
