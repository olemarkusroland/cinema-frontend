import { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([
        { id: 1, name: 'Pusur Filmen' },
        { id: 2, name: 'Another Movie' },
        // Add more movies as needed
    ]);

    return (
        <MovieContext.Provider value={{ movies, setMovies }}>
            {children}
        </MovieContext.Provider>
    );
};
