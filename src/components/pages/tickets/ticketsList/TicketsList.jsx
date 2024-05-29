import './TicketsList.css';
import { useState } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { TicketsItem } from './ticketsItem/TicketsItem';
import { Link, useParams } from 'react-router-dom';

export const TicketsList = ({screening, movie}) => {
  const { screeningId } = useParams();

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

  const handleAdd = (id) => {
    setQuantities({ ...quantities, [id]: (quantities[id] || 0) + 1 });
  };

  const handleRemove = (id) => {
    setQuantities({ ...quantities, [id]: Math.max((quantities[id] || 0) - 1, 0) });
  };

  const totalTickets = Object.values(quantities).reduce((sum, quantity) => sum + quantity, 0);
  const totalPrice = ticketTypes.reduce((sum, ticket) => sum + ticket.price * (quantities[ticket.id] || 0), 0);

  return (
    <Box className="ticket-list">
      {ticketTypes.map(ticket => (
        <TicketsItem 
          key={ticket.id}
          name={ticket.name}
          price={ticket.price}
          quantity={quantities[ticket.id] || 0}
          info={ticket.info}
          onAdd={() => handleAdd(ticket.id)}
          onRemove={() => handleRemove(ticket.id)}
        />
      ))}
      <Paper elevation={2} className="summary">
        <div className='ticket-count'>
            <Typography variant="h6">{totalTickets} Tickets</Typography>
            <Typography variant="h6">kr {totalPrice}</Typography>
        </div>
        <Link 
          to={`/tickets/${screeningId}/seats`}
          state={{ screening, movie }}
        >
          <Button variant="contained" className="next-button" fullWidth>Next</Button>
        </Link>
      </Paper>
    </Box>
  );
};
