import React from 'react';
import { Box, Typography, IconButton, Paper, Tooltip } from '@mui/material';
import { Add, Remove, Info } from '@mui/icons-material';
import './TicketsItem.css';
import PropTypes from 'prop-types';

export const TicketsItem = ({ name, price, quantity, onAdd, onRemove, info }) => {
  return (
    <Paper elevation={2} className="ticket-item">
      <Box className="ticket-info">
        <Typography variant="h6" className="ticket-name">
          {name} {info && (
            <Tooltip title={info} arrow>
              <Info className="info-icon" />
            </Tooltip>
          )}
        </Typography>
        <Typography variant="body2" className="ticket-price">kr {price}</Typography>
      </Box>
      <Box className="quantity-controls">
        <IconButton onClick={onRemove} disabled={quantity === 0} className="quantity-button">
          <Remove />
        </IconButton>
        <Typography variant="body1" className="quantity-text">{quantity}</Typography>
        <IconButton onClick={onAdd} className="quantity-button">
          <Add />
        </IconButton>
      </Box>
    </Paper>
  );
};

TicketsItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  info: PropTypes.string,
};
