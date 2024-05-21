import './Tickets.css';

import React, { useContext } from 'react';
import dayjs from 'dayjs';

import poster from '../../assets/pusur-filmen.webp';

import { TicketsList } from './ticketsList/TicketsList';
import { ScreeningCard } from '../screening-card/ScreeningCard';
import { useParams } from 'react-router-dom';
import { ScreeningContext } from '../../context/ScreeningContext';
import { MovieContext } from '../../context/MovieContext';

export const Tickets = () => {
    const {screeningId} = useParams();
    const { screenings } = useContext(ScreeningContext)
    const { movies } = useContext(MovieContext)

    const screening = screenings.find(s => s.id == parseInt(screeningId));
    const movie = movies.find(m => m.id == screening.movieId);

    return (
        <div className='tickets'>
            <div className='tickets-header'>
                <div className='tickets-information'>
                    <ScreeningCard isClickable={false} screening={screening} movie={movie} />
                </div>
                <TicketsList />
            </div>
            
        </div>
    );
};
