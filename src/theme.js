import { createMuiTheme }  from '@material-ui/core/styles'
const theme = createMuiTheme({
  palette: {
    primary: { 
        main: '#200236' ,
    },
    secondary: {
        main: '#AF4B00',
    }
  },
  typography: {
        body1:{
            fontFamily: 'Creepster',
        },
        body2:{
            fontFamily: 'Griffy', 
            // fontStyle: 'cursive',
        },
        h1:{
          fontFamily: 'Creepster',
          // fontSize:
        }
  },
//   overrides: {
//     MuiCssBaseline: {
//       '@global': {
//         '@font-face': [raleway],
//       },
//     },
//   },
  body1: {
    fontWeight: 500,
  },
  button: {  
    fontStyle: 'Creepster',
  },
})
export default theme