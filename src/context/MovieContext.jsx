import { createContext, useEffect, useState } from 'react';
import { fetchMovies } from './Fetch/fetchMovies';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchMovies();
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
