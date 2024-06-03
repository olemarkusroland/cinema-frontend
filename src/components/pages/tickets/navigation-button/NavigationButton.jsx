import './NavigationButton.css'
import { Button, Paper, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export const NavigationButton = ({ step, handleNext, totalTickets, totalPrice }) => {
    return (
        <>
            <Paper elevation={2} className="summary">
                <div className='ticket-count'>
                    <Typography variant="h6">{totalTickets} Tickets</Typography>
                    <Typography variant="h6">kr {totalPrice}</Typography>
                </div>
                <div className="next-button" onClick={handleNext}>
                    {step}
                </div>
            </Paper>
        </>
    );
};

NavigationButton.propTypes = {
    step: PropTypes.number.isRequired,
    handleNext: PropTypes.func.isRequired,
};
