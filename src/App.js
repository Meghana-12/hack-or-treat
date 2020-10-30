import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import Nav from './Components/nav'
import Home from './Components/home';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Nav >
         <Home/>
      </Nav>
       
  </ThemeProvider>
  );
}

export default App;
