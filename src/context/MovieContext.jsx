import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { fetchCinema } from '../utils/fetchCinema';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCinema('movie');
            setMovies(data);
        };
        
        fetchData();
    }, []);

    return (
        <MovieContext.Provider value={{ movies, setMovies }}>
            {children}
        </MovieContext.Provider>
    );
};

MovieProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
