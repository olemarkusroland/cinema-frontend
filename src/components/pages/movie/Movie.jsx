import './Movie.css';

import { useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { ScreeningCard } from '../../screening-card/ScreeningCard';
import { ScreeningContext } from '../../../context/ScreeningContext';


export const Movie = () => {
    const { id } = useParams();
    const { screenings } = useContext(ScreeningContext);

    const location = useLocation();
    const locationState = location.state || {};
    const movie = locationState.movie;

    if (!movie) {
        return <div>Lodaing movie with id {id}</div>;
    }
    
    const filteredScreenings = screenings.filter(s => s.movieId === id);

    const movieDetails = [
        { label: 'Released', value: movie.released },
        { label: 'Runtime', value: movie.runtime },
        { label: 'Genre', value: movie.genre },
        { label: 'Rated', value: movie.rated },
        { label: 'Director', value: movie.director },
        { label: 'Writer', value: movie.writer },
        { label: 'Actors', value: movie.actors },
        { label: 'Language', value: movie.language },
        { label: 'Country', value: movie.country },
        { label: 'Awards', value: movie.awards },
        { label: 'Metascore', value: movie.metascore },
        { label: 'Box Office', value: movie.boxOffice },
        { label: 'Production', value: movie.production },
        { label: 'Website', value: movie.website },
        { label: 'DVD Release', value: movie.dvd },
        { label: 'IMDb Rating', value: movie.imdbRating },
        { label: 'IMDb Votes', value: movie.imdbVotes },
    ];

    return (
        <div className='movie'>
            <div className='movie-header'>
                <img
                    className="movie-poster"
                    src={movie.poster}
                    alt={`${movie.title} Poster`}
                />
                <div className='movie-title-description-container'>
                    <h1 className='movie-title'>{movie.title}</h1>
                    <p className='movie-description'>{movie.plot}</p>
                </div>
            </div>
            <div className='place-times'>
                {filteredScreenings.length > 0 ? (
                    filteredScreenings.map((screening, index) => (
                        <ScreeningCard key={index} screening={screening} className="movie-place-time" />
                    ))
                ) : (
                    <p>There are currently no screenings available</p>
                )}
            </div>
            <div className='movie-details'>
                {movieDetails.map((detail, index) =>
                    detail.value && detail.value !== "N/A" ? (
                        <div key={index} className='movie-detail'>
                            <span className='detail-label'>{detail.label}: </span>
                            <span className='detail-value'>{detail.value}</span>
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
};
