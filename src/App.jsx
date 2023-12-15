import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from "./components/Navbar"

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      }, 
      secondary: {
        main: '#6649be',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
    </ThemeProvider>
  )
}

export default App
