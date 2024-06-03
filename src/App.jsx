// App.jsx
import { ThemeProvider, createTheme } from '@mui/material';
import { ScreeningProvider } from './context/ScreeningContext';
import { MovieProvider } from './context/MovieContext';
import Curtains from './components/curtains/Curtains';
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
    <div>
      <ThemeProvider theme={theme}>
        <MovieProvider>
          <AuditoriumProvider>
            <ScreeningProvider>
              <Curtains />
            </ScreeningProvider>
          </AuditoriumProvider>
        </MovieProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
