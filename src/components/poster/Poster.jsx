import './Poster.css'
import poster from '../../assets/pusur-filmen.webp';

export const Poster = ({ movie, className }) => {
    return (
        <div className="poster-container">
            <img
                className={className}
                src={movie.poster}
                alt={`${movie.title} Poster`}
            />
        </div>
    );
};
