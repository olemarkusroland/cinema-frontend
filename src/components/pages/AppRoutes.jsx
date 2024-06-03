import { Routes, Route } from 'react-router-dom';
import { Home } from './home/Home';
import { Movie } from './movie/Movie';
import { Tickets } from './tickets/Tickets';
import { PickSeats } from './seats/Seats';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="/tickets/:screeningId" element={<Tickets />} />
      <Route path="/tickets/:screeningId/seats" element={<PickSeats />} />
    </Routes>
  );
};

export default AppRoutes;
