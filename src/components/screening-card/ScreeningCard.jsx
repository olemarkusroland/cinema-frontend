import './ScreeningCard.css';

import PropTypes from 'prop-types';

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
                <PlaceTimeCard screening={screening} isClickable={isClickable} includeDate={includeDate}/>
                <div className="corner"></div>
            </div>
        </div>
  );
};

ScreeningCard.propTypes = {
  isClickable: PropTypes.bool,
  screening: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    auditorium: PropTypes.string.isRequired,
    movieId: PropTypes.number.isRequired,
  }).isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  includeDate: PropTypes.bool,
};
