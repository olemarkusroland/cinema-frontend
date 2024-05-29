import { Routes, Route } from 'react-router-dom';
import { Home } from '../home/Home';
import { Movie } from '../movie/Movie';
import { Tickets } from '../tickets/Tickets';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="/tickets/:screeningId" element={<Tickets />} />
    </Routes>
  );
};

export default AppRoutes;
