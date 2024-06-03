import { createContext, useEffect, useState } from 'react';
import { fetchCinema } from '../utils/fetchCinema';

export const AuditoriumContext = createContext();

export const AuditoriumProvider = ({ children }) => {
    const [auditoriums, setAuditoriums] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCinema('auditorium');
            setAuditoriums(data);
        };
        
        fetchData();
    }, []);

    return (
        <AuditoriumContext.Provider value={{ auditoriums, setAuditoriums }}>
            {children}
        </AuditoriumContext.Provider>
    );
};
