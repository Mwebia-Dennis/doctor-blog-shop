
import {useRoutes} from 'react-router-dom';
import { routes } from './routes'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


function App() {
  const routing = useRoutes(routes)
  
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#79d2a6'
      },
      secondary: {
        main: '#fff'
      }
    }
  });

  return (
    
    <MuiThemeProvider theme={theme}>
      {routing}
    </MuiThemeProvider>
  )
}

export default App;
