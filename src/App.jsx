import { createTheme, ThemeProvider } from '@mui/material/styles';
import { About, Contact, Hero, Navbar } from './components';


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
      <Hero/>
      <About/>
      <Contact/>
    </ThemeProvider>
  )
}

export default App
