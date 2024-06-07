// App.jsx
import { ThemeProvider, createTheme } from '@mui/material';
import { ScreeningProvider } from './context/ScreeningContext';
import { MovieProvider } from './context/MovieContext';
import Curtains from './components/curtains/Curtains';
import { Header } from './components/header/Header';
import './App.css';
import { AuditoriumProvider } from './context/AuditoriumContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#630000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MovieProvider>
        <AuditoriumProvider>
          <ScreeningProvider>
            <Header />
            <Curtains />
          </ScreeningProvider>
        </AuditoriumProvider>
      </MovieProvider>
    </ThemeProvider>
  );
}

export default App;
