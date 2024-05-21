import './ScreeningCard.css';


import poster from '../../assets/pusur-filmen.webp';
import { PlaceTimeCard } from '../placeTime/PlaceTimeCard';
import { Link } from 'react-router-dom';

export const ScreeningCard = ({ screening, isClickable = true, includeDate = true }) => {
    const movieContent = (
        <div className="movie-link">
            <img
                className="poster"
                src={poster}
                alt="Pusur Filmen Poster"
            />
            <p className='title'>Pusur Filmen</p>
        </div>
    );
    
    return (
        <div className={`screening-card ${isClickable ? '' : 'non-clickable'}`}>
            {isClickable ? (
                <Link to={`movie/${screening.movieId}`} className="movie-link">
                    {movieContent}
                </Link>
            ) : (
                movieContent
            )}
            <div className="perforation"></div>
            <div className='time-place-container bottom'>
                <PlaceTimeCard screening={screening} isClickable={isClickable} includeDate={false}/>
                <div className="corner"></div>
            </div>
        </div>
  );
};
