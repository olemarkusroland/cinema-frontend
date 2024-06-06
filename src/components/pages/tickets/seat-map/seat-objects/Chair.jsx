import PropTypes from 'prop-types';

const Chair = ({ x, y, seat, selected, onClick }) => {
    const fillColor = selected ? "#ff0000" : "#630000"; // Red if selected, original color otherwise

    // Convert numerical row to alphabetical representation (1 -> A, 2 -> B, ...)
    const rowLabel = String.fromCharCode(64 + seat.row);

    return (
        <g transform={`translate(${x}, ${y})`} onClick={() => onClick(seat.id)}>
            <text 
                x="50" 
                y="-9" 
                textAnchor="middle" 
                fill="black" 
                fontSize="24" 
                fontWeight="bold" 
                style={{ textDecoration: selected ? 'underline' : 'none' }}
            >
                {`${rowLabel} / ${seat.number}`}
            </text> {/* Row and Number */}
            <rect x="0" y="1" width="17" height="79" rx="5" ry="4" fill={fillColor} /> {/* Left */}
            <rect x="18" y="5" width="63" height="50" rx="5" ry="4" fill={fillColor} /> {/* Front */}
            <rect x="18" y="56" width="63" height="24" rx="5" ry="4" fill={fillColor} />  {/* Back */}
            <rect x="82" y="1" width="17" height="79" rx="5" ry="4" fill={fillColor} />   {/* Right */}
            <rect x="0" y="0" width="100" height="80" fill="transparent" style={{ cursor: 'pointer' }} /> {/* Invisible rectangle to cover the entire chair area and make it clickable */}
        </g>
    );
};

Chair.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    seat: PropTypes.shape({
        id: PropTypes.number.isRequired,
        row: PropTypes.number.isRequired,
        number: PropTypes.number.isRequired,
    }).isRequired,
    selected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Chair;
