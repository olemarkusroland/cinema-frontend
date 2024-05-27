import poster from '../../assets/pusur-filmen.webp';

export const Poster = ({ movie, className }) => {
    return (
        <div>
            <img
                className={className}
                src={poster}
                alt={`${movie.title} Poster`}
            />
        </div>
    );
};
