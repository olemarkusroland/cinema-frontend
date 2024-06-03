import './Seats.css'

import { useLocation } from "react-router-dom";
import { formatDate } from "../../../utils/format/formatDate";

export const PickSeats = () => {
    const location = useLocation();
    const locationState = location.state || {};
    const screening = locationState.screening;
    const movie = locationState.movie;

    if (!movie && !screening){
        return <h1 className='movie-title'>Loading movie and screening</h1>
    }
    else if (!movie) {
        return <h1 className='movie-title'>Loading movie</h1>
    }
    else if (!screening) {
        return <h1 className='movie-title'>Loading screening</h1>
    }

    return (
        <div className="seats-container">
            <h1 className='movie-title'>{movie.title}</h1>
            <p>{formatDate(screening.date)}, {screening.time} in {screening.auditorium}</p>
            <div className="separator"></div>

        </div>
    )
}
