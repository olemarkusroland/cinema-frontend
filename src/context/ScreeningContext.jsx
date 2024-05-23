import { createContext, useState, useEffect } from 'react';
import { fetchScreenings } from './Fetch/fetchScreenings.js';

export const ScreeningContext = createContext();

export const ScreeningProvider = ({ children }) => {
    const [screenings, setScreenings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchScreenings();
            setScreenings(data);
        };
        
        fetchData();
    }, []);

    return (
        <ScreeningContext.Provider value={{ screenings, setScreenings }}>
            {children}
        </ScreeningContext.Provider>
    );
};
