import { useContext } from 'react';
import './Movie.css';
import { ScreeningCard } from '../screening-card/ScreeningCard';
import { ScreeningContext } from '../../context/ScreeningContext';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../../context/MovieContext';
import { Poster } from '../poster/Poster';

export const Movie = () => {
    const { id } = useParams();
    const { movies } = useContext(MovieContext);
    const { screenings } = useContext(ScreeningContext);

    const movie = movies.find(m => m.id === parseInt(id));
    const filteredScreenings = screenings.filter(s => s.movieId === parseInt(id));

    if (!movie) {
        return <div>Movie with id {id} not found</div>;
    }

    return (
        <div className='movie'>
            <div className='movie-header'>
                <Poster className="movie-poster" movie={movie} />
                <div className='movie-details'>
                    <h1 className='movie-title'>{movie.name}</h1>
                    <p className='movie-description'>
                        Pusur Filmen is a heartwarming adventure that follows the mischievous yet lovable cat Pusur. 
                        Join Pusur as he navigates through hilarious and exciting escapades, meeting a cast of quirky 
                        characters along the way. From epic chases to touching moments of friendship, this film promises 
                        to entertain audiences of all ages with its charm and humor.
                    </p>
                </div>
            </div>
            <div className='place-times'>
                {filteredScreenings.length > 0 ? (
                    filteredScreenings.map((screening, index) => (
                        <ScreeningCard key={index} screening={screening} className="movie-place-time" />
                    ))
                ) : (
                    <p>No screenings available</p>
                )}
            </div>
        </div>
    );
};
