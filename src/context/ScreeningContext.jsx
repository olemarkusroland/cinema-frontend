import { createContext, useState, useEffect } from 'react';

import { fetchCinema } from '../utils/fetchCinema.js';
import { formatScreenings } from '../utils/format/formatScreenings.js/index.js';

export const ScreeningContext = createContext();

export const ScreeningProvider = ({ children }) => {
    const [screenings, setScreenings] = useState([]);

    
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCinema('screening');
            setScreenings(formatScreenings(data));
        };
        
        fetchData();
    }, []);
    
    return (
        <ScreeningContext.Provider value={{ screenings, setScreenings }}>
            {children}
        </ScreeningContext.Provider>
    );
};
