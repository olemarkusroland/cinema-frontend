import './Tickets.css';

import { useContext } from 'react';

import { TicketsList } from './ticketsList/TicketsList';
import { useParams } from 'react-router-dom';
import { ScreeningContext } from '../../../context/ScreeningContext';
import { TicketCard } from '../../ticket-card/TicketCard';

export const Tickets = () => {
    const { screeningId } = useParams();
    const { screenings } = useContext(ScreeningContext)

    const screening = screenings.find(s => s.id == parseInt(screeningId));

    return (
        <div className='tickets'>
            <div className='tickets-header'>
                <div className='tickets-information'>
                    <TicketCard screening={screening} isClickable={false} />
                </div>
                <TicketsList />
            </div>
        </div>
    );
};