import './Tickets.css';

import { TicketsList } from './ticketsList/TicketsList';
import { useLocation } from 'react-router-dom';
import { TicketCard } from '../../ticket-card/TicketCard';
import { useContext } from 'react';
import { MovieContext } from '../../../context/MovieContext';

export const Tickets = () => {
    const location = useLocation();
    const locationState = location.state || {};
    const screening = locationState.screening;

    const { movies } = useContext(MovieContext);
    const movie = movies.find(m => m.imdbID === screening.movieId);

    return (
        <div className='tickets'>
            <div className='tickets-header'>
                <div className='tickets-information'>
                    <TicketCard screening={screening} movie={movie} isClickable={false} />
                </div>
                <TicketsList screening={screening} movie={movie}/>
            </div>
        </div>
    );
};