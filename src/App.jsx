import { createTheme, ThemeProvider } from '@mui/material/styles';
import { About, Contact, Education, Hero, Navbar, Projects } from './components';


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
      <Projects/>
      <Education/>
      <Contact/>
    </ThemeProvider>
  )
}

export default App
