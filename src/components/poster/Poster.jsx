import PropTypes from 'prop-types';
import { CircularProgress } from '@mui/material';
import './Poster.css';

export const Poster = ({ movie }) => {
    const { poster, title } = movie || {};
    return (
        <div className="poster-container">
            {movie ? (
                <>
                    <img
                        className="poster-image"
                        src={poster}
                        alt={`${title} Poster`}
                    />
                    <p className="title">{title}</p>
                </>
            ) : (
                <CircularProgress className="poster-image" size={80} />
            )}
        </div>
    );
};

Poster.propTypes = {
    movie: PropTypes.shape({
        poster: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }),
};