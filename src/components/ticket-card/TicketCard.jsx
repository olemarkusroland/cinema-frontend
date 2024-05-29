import './TicketCard.css';

import PropTypes from 'prop-types';

import { ScreeningCard } from '../screening-card/ScreeningCard';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MovieContext } from '../../context/MovieContext';
import { Poster } from '../poster/Poster';

export const TicketCard = ({ screening, isClickable = true, includeDate = true }) => {
    const { movies } = useContext(MovieContext);

    const movie = movies.find(m => m.imdbID === screening.movieId);
    
    let movieContent;

    if (movie) {
        movieContent = (
            <div className="movie-link">
                <Poster className={"poster"} movie={movie} />
                <p className='title'>{movie.title}</p>
            </div>
        );
    }
    else {
        movieContent = (
            <div className="movie-link">
                <p className='title'>Loading movie</p>
            </div>
        );
    }
    
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
                <ScreeningCard screening={screening} isClickable={isClickable} includeDate={includeDate}/>
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
    movieId: PropTypes.string.isRequired,
  }).isRequired,
  includeDate: PropTypes.bool,
};
