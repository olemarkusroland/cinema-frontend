import { ThemeProvider, createTheme } from '@mui/material';
import './App.css'
import { Header } from './header/Header'
import { Home } from './home/Home'

const theme = createTheme({
  palette: {
    primary: {
      main: '#630000',  // Change this color to your desired highlight color
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Home/>
      </ThemeProvider>
    </div>
  )
}

export default App
