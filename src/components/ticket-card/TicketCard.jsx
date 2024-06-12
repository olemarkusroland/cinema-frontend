import './TicketCard.css';

import PropTypes from 'prop-types';

import { ScreeningCard } from '../screening-card/ScreeningCard';
import { Link } from 'react-router-dom';
import { Poster } from '../poster/Poster';

export const TicketCard = ({ screening, movie, isClickable = true, includeDate = true }) => {   
    return (
        <div className={`screening-card ${isClickable ? '' : 'non-clickable'}`}>
            {isClickable ? (
                <Link
                    to={`movie/${screening.movieId}`}
                    className="movie-link"
                >
                    <Poster movie={movie} />
                </Link>
            ) : (
                <Poster movie={movie} />
            )}
            <div className="perforation"></div>
            <div className='time-place-container bottom'>
                <ScreeningCard screening={screening} isClickable={isClickable} includeDate={includeDate}/>
                <div className="corner"></div>
            </div>
        </div>
  );
};

TicketCard.propTypes = {
    isClickable: PropTypes.bool,
    includeDate: PropTypes.bool,
    movie: PropTypes.shape({
        poster: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }),
    screening: PropTypes.shape({
        id: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        movieId: PropTypes.string.isRequired,
    }).isRequired,
};

