// components/seats/SeatMap.jsx

import { useState } from 'react';
import './SeatMap.css';

const SeatMap = ({auditorium}) => {
    const [selectedChairs, setSelectedChairs] = useState(new Set());

    const handleChairClick = (chairId) => {
        setSelectedChairs(prevSelectedChairs => {
            const newSelectedChairs = new Set(prevSelectedChairs);
            if (newSelectedChairs.has(chairId)) {
                newSelectedChairs.delete(chairId);
            } else {
                newSelectedChairs.add(chairId);
            }
            return newSelectedChairs;
        });
    };

    const Chair = ({ x, y, chairId }) => {
        const isSelected = selectedChairs.has(chairId);
        const fillColor = isSelected ? "#ff0000" : "#630000"; // Red if selected, original color otherwise

        return (
            <g transform={`translate(${x}, ${y})`} onClick={() => handleChairClick(chairId)}>
                <rect x="0" y="1" width="17" height="79" rx="5" ry="4" fill={fillColor} /> {/* Left */}
                <rect x="18" y="5" width="63" height="50" rx="5" ry="4" fill={fillColor} /> {/* Front */}
                <rect x="18" y="56" width="63" height="24" rx="5" ry="4" fill={fillColor} />  {/* Back */}
                <rect x="82" y="1" width="17" height="79" rx="5" ry="4" fill={fillColor} />   {/* Right */}
                <rect x="0" y="0" width="100" height="80" fill="transparent" style={{ cursor: 'pointer' }} /> {/* Invisible rectangle to cover the entire chair area and make it clickable */}
            </g>
        );
    };
    console.log(auditorium)
    return (
        <div className="seat-map-container">
            <svg width="100%" height="100%" viewBox="0 0 200 200">
                <rect width="100%" height="100%" fill="white" />
                {/* Demonstrating the reusability of the Chair component */}
                <Chair x={0} y={0} chairId={1} />
                <Chair x={100} y={0} chairId={2} />
                <Chair x={0} y={80} chairId={3} />
                <Chair x={100} y={80} chairId={4} />
            </svg>
        </div>
    );
};

export default SeatMap;
