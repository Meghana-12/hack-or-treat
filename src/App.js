import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import Nav from './Components/nav'
import Home from './Components/home';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import Nav from './Components/nav';
import Spider from './Components/Spider/spider';
import Pumpkin from './Components/Pumpkin/pumpkin';
import Ghost from './Components/Ghost/ghost';


function App() {
  return (
    <div>
      <Spider />
      <Ghost />
      <Pumpkin />
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Nav >
         <Home/>
      </Nav>
       
  </ThemeProvider>
  </div>
  );
}

export default App;
