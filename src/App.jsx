import { ThemeProvider, createTheme } from '@mui/material';
import './App.css'
import { Header } from './components/header/Header'
import { Home } from './components/home/Home'
import { Route, Routes } from 'react-router-dom';
import { Movie } from './components/movie/Movie';
import { Tickets } from './components/tickets/Tickets'; // Import the Tickets component
import { ScreeningProvider } from './context/ScreeningContext';
import { MovieProvider } from './context/MovieContext';

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
      <ScreeningProvider>

        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<Movie />} />
          <Route path='/tickets/:screeningId' element={<Tickets />} />
        </Routes>

      </ScreeningProvider>
      </MovieProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
