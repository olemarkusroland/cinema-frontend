import { ThemeProvider, createTheme } from '@mui/material';
import './App.css'
import { Header } from './header/Header'
import { Home } from './home/Home'
import { Route, Routes } from 'react-router-dom';
import { Movie } from './movie/Movie';
import { Tickets } from './tickets/Tickets'; // Import the Tickets component

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
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/pusur-filmen' element={<Movie />} />
          <Route path='/tickets/pusur-filmen' element={<Tickets />} /> {/* Use the Tickets component */}
        </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App
