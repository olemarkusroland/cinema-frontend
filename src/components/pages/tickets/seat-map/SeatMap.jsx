import { useEffect, useState } from 'react';
import './SeatMap.css';
import { fetchCinema } from '../../../../utils/fetchCinema';
import Chair from './seat-objects/Chair';

const SeatMap = ({ auditoriumId }) => {
    const [auditorium, setAuditorium] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCinema(`auditorium/${auditoriumId}`);
            setAuditorium(data);
        };
        
        fetchData();
    }, [auditoriumId]);

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

    if (!auditorium || !auditorium.seats) return null;

    const numRows = Math.max(...auditorium.seats.map(seat => seat.row));
    const numCols = Math.max(...auditorium.seats.map(seat => seat.number));

    const chairWidth = 100;
    const chairHeight = 80;

    const chairVerticalSpacing = 60;
    const chairHorizontalSpacing = 20;

    const yOffset = 40;

    const canvasWidth = numCols * (chairWidth + chairHorizontalSpacing);
    const canvasHeight = numRows * (chairHeight + chairVerticalSpacing) + yOffset;

    return (
        <div className="seat-map-container">
            <svg width="100%" height="100%" viewBox={`0 0 ${canvasWidth} ${canvasHeight}`}>
                <rect width="100%" height="100%" fill="white" />
                {auditorium.seats.map(seat => {
                    const rowSeats = auditorium.seats.filter(s => s.row === seat.row);
                    const totalRowWidth = rowSeats.length * chairWidth + (rowSeats.length - 1) * chairHorizontalSpacing; // Adjusted total row width
                    const xOffset = (canvasWidth - totalRowWidth) / 2; // Horizontal centering
                    
                    return (
                        <Chair
                            key={seat.id}
                            x={(seat.number - 1) * (chairWidth + chairHorizontalSpacing) + xOffset}
                            y={(seat.row - 1) * (chairHeight + chairVerticalSpacing) + yOffset}
                            seat={seat}
                            selected={selectedChairs.has(seat.id)}
                            onClick={handleChairClick}
                        />
                    );
                })}
            </svg>
        </div>
    );
};

export default SeatMap;