import { Link } from 'react-router-dom';
import './PlaceTime.css';

export const PlaceTime = ({ date = null, className = '' }) => {
    return (
        <Link to="/tickets/pusur-filmen">
            <div className={`place-time ${className}`}>
                {date && <p className='date'>{date}</p>}
                <p className='auditorium'>A1</p>
                <p className='time'>21:00</p>
            </div>
        </Link>
    );
};
