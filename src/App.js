import logo from './logo.svg';
import './App.css';
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
      <Nav 
        content={[...new Array(50)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
          )
          .join('\n')}
      />
  </ThemeProvider>
  </div>
  );
}

export default App;
