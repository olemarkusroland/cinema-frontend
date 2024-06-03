
import PropTypes from 'prop-types';
import { TicketsItem } from './ticket-item/TicketsItem';

const TicketTypes = ({ ticketTypes, quantities, setQuantities }) => {
    const handleAdd = (id) => {
        setQuantities({ ...quantities, [id]: (quantities[id] || 0) + 1 });
    };

    const handleRemove = (id) => {
        setQuantities({ ...quantities, [id]: Math.max((quantities[id] || 0) - 1, 0) });
    };

    return (
        <>
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
        </>
    );
};

TicketTypes.propTypes = {
    ticketTypes: PropTypes.array.isRequired,
    quantities: PropTypes.object.isRequired,
    setQuantities: PropTypes.func.isRequired,
};

export default TicketTypes;
