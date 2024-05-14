import './ScreeningCard.css';
import poster from '../assets/pusur-filmen.webp';
import { PlaceTime } from '../placeTime/PlaceTime';
import { Link } from 'react-router-dom';

export const ScreeningCard = () => {
    return (
        <div className="screening-card">
            <Link to="movie/pusur-filmen" className="movie-link">
                <img
                    className="poster"
                    src={poster}
                    alt="Pusur Filmen Poster"
                />
                <p className='title'>Pusur Filmen</p>
            </Link>
            <div className="perforation"></div>
            <div className='time-place-container bottom'>
                <PlaceTime className='screening-card-place-time' />
                <div className="corner"></div>
            </div>
        </div>
    );
};
