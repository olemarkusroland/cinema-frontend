import './Tickets.css';

import { useParams, } from 'react-router-dom';
import { TicketCard } from '../../ticket-card/TicketCard';
import { useContext, useState } from 'react';
import { MovieContext } from '../../../context/MovieContext';
import { ScreeningContext } from '../../../context/ScreeningContext';

import SeatMap from './seat-map/SeatMap';
import { NavigationButton } from './navigation-button/NavigationButton';
import TicketTypes from './ticket-list/TicketTypes';


export const Tickets = () => {
    const { screeningId } = useParams();
    const { screenings } = useContext(ScreeningContext)
    const screening = screenings.find(s => s.id == screeningId)

    const { movies } = useContext(MovieContext);
    const movie = movies.find(m => m.imdbID === screening.movieId);

    const ticketTypes = [
        { id: 1, name: 'Adult', price: 205, info: null },
        { id: 2, name: 'Child/Youth', price: 185, info: "Up to and including 14 years old." },
        { id: 3, name: 'Military', price: 185, info: "You will be required to provide documentation for your discount, such as a draft letter (travel to/from initial compulsory military service) or a student ID for military school." },
        { id: 4, name: 'Senior Citizen', price: 185, info: null },
        { id: 5, name: 'Student', price: 145, info: "You will be required to provide a student ID to validate your discount." },
        { id: 6, name: 'Bob', price: 145, info: "You will need to provide valid ID to confirm your name is Bob." }
    ];

    const [quantities, setQuantities] = useState(
        ticketTypes.reduce((acc, ticket) => ({ ...acc, [ticket.id]: 0 }), {})
    );

    const totalTickets = Object.values(quantities).reduce((sum, quantity) => sum + quantity, 0);
    const totalPrice = ticketTypes.reduce((sum, ticket) => sum + ticket.price * (quantities[ticket.id] || 0), 0);
    
    const [step, setStep] = useState(1);

    const handleNext = () => {
        if (step === 1) {
            setStep(2);
        } else {
            // TODO: Payment page
        }
    };

    return (
        <div className='tickets'>
            <div className='tickets-header'>
                <div className='tickets-information'>
                    <TicketCard screening={screening} movie={movie} isClickable={false} />
                </div>
                <div className="ticket-list">
                    {step === 1 ? (
                        <TicketTypes
                            ticketTypes={ticketTypes}
                            quantities={quantities}
                            setQuantities={setQuantities}
                        />
                    ) : (
                        <SeatMap auditoriumId={screening.auditoriumId}/>
                    )}
                    <NavigationButton step={step} handleNext={handleNext} totalTickets={totalTickets} totalPrice={totalPrice}/>
                </div>
            </div>
        </div>
    );
};