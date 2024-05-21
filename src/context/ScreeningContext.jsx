import React, { createContext, useState } from 'react';
import dayjs from 'dayjs';

export const ScreeningContext = createContext();

export const ScreeningProvider = ({ children }) => {
    const [screenings, setScreenings] = useState([
        { id: 1, date: dayjs().format('YYYY-MM-DD'), time: '11:43', auditorium: 'A1', movieId: 1 },
        { id: 2, date: dayjs().add(1, 'day').format('YYYY-MM-DD'), time: '14:00', auditorium: 'A1', movieId: 1 },
        { id: 3, date: dayjs().add(2, 'days').format('YYYY-MM-DD'), time: '16:30', auditorium: 'A1', movieId: 1 },
        { id: 4, date: dayjs().add(3, 'days').format('YYYY-MM-DD'), time: '18:00', auditorium: 'A1', movieId: 1 },
        { id: 5, date: dayjs().format('YYYY-MM-DD'), time: '12:00', auditorium: 'A2', movieId: 2 },
        { id: 6, date: dayjs().add(1, 'day').format('YYYY-MM-DD'), time: '15:00', auditorium: 'A2', movieId: 2 },
        { id: 7, date: dayjs().add(2, 'days').format('YYYY-MM-DD'), time: '17:30', auditorium: 'A2', movieId: 2 },
        { id: 8, date: dayjs().add(3, 'days').format('YYYY-MM-DD'), time: '19:00', auditorium: 'A2', movieId: 2 },
        // Add more screenings as needed
    ]);

    return (
        <ScreeningContext.Provider value={{ screenings, setScreenings }}>
            {children}
        </ScreeningContext.Provider>
    );
};
