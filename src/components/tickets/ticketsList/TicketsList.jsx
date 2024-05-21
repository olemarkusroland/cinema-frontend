import React, { useState } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { TicketsItem } from './ticketsItem/TicketsItem';
import './TicketsList.css';

export const TicketsList = () => {
  const [tickets, setTickets] = useState([
    { id: 1, name: 'Voksen', price: 205, quantity: 2, info: null },
    { id: 2, name: 'Barn', price: 185, quantity: 0, info: "Til og med 14 år" },
    { id: 3, name: 'Honnør', price: 185, quantity: 1, info: "..." },
    { id: 4, name: 'Rullestol', price: 120, quantity: 0, info: null },
    { id: 5, name: 'Ledsager', price: 0, quantity: 0, info: "Forhåndsvalidering av ledsagerbevis kreves. Ta kontakt med cinema@solsidencinema.net for å registrere deg." },
  ]);

  const handleAdd = (id) => {
    setTickets(tickets.map(ticket => 
      ticket.id === id ? { ...ticket, quantity: ticket.quantity + 1 } : ticket
    ));
  };

  const handleRemove = (id) => {
    setTickets(tickets.map(ticket => 
      ticket.id === id ? { ...ticket, quantity: ticket.quantity - 1 } : ticket
    ));
  };

  const totalTickets = tickets.reduce((sum, ticket) => sum + ticket.quantity, 0);
  const totalPrice = tickets.reduce((sum, ticket) => sum + ticket.price * ticket.quantity, 0);

  return (
    <Box className="ticket-list">
      {tickets.map(ticket => (
        <TicketsItem 
          key={ticket.id}
          name={ticket.name}
          price={ticket.price}
          quantity={ticket.quantity}
          hasInfo={ticket.hasInfo}
          onAdd={() => handleAdd(ticket.id)}
          onRemove={() => handleRemove(ticket.id)}
        />
      ))}
      <Paper elevation={2} className="summary">
        <div className='ticket-count'>
            <Typography variant="h6">{totalTickets} billetter</Typography>
            <Typography variant="h6">kr {totalPrice}</Typography>
        </div>
        <Button variant="contained" className="next-button" fullWidth>
            Neste
        </Button>
      </Paper>
    </Box>
  );
};
