import React, { createContext, useState } from 'react';
import dayjs from 'dayjs';

export const ScreeningContext = createContext();

export const ScreeningProvider = ({ children }) => {
    const [screenings, setScreenings] = useState([
        { id: 1, date: dayjs().format('YYYY-MM-DD'), time: '11:00', auditorium: 'HALL 1', movieId: 1 },
        { id: 2, date: dayjs().format('YYYY-MM-DD'), time: '13:00', auditorium: 'HALL 1', movieId: 1 },
        { id: 3, date: dayjs().format('YYYY-MM-DD'), time: '15:00', auditorium: 'HALL 1', movieId: 1 },
        { id: 4, date: dayjs().format('YYYY-MM-DD'), time: '17:00', auditorium: 'HALL 1', movieId: 1 },
        { id: 5, date: dayjs().format('YYYY-MM-DD'), time: '19:00', auditorium: 'HALL 1', movieId: 1 },
        { id: 6, date: dayjs().format('YYYY-MM-DD'), time: '21:00', auditorium: 'HALL 1', movieId: 1 },
        { id: 7, date: dayjs().format('YYYY-MM-DD'), time: '23:00', auditorium: 'HALL 1', movieId: 1 },
        { id: 8, date: dayjs().format('YYYY-MM-DD'), time: '10:00', auditorium: 'HALL 2', movieId: 2 },
        { id: 9, date: dayjs().format('YYYY-MM-DD'), time: '12:00', auditorium: 'HALL 2', movieId: 2 },
        { id: 10, date: dayjs().format('YYYY-MM-DD'), time: '14:00', auditorium: 'HALL 2', movieId: 2 },
        { id: 11, date: dayjs().format('YYYY-MM-DD'), time: '16:00', auditorium: 'HALL 2', movieId: 2 },
        { id: 12, date: dayjs().add(1, 'day').format('YYYY-MM-DD'), time: '14:00', auditorium: 'HALL 1', movieId: 1 },
        { id: 13, date: dayjs().add(2, 'days').format('YYYY-MM-DD'), time: '16:30', auditorium: 'HALL 1', movieId: 1 },
        { id: 14, date: dayjs().add(3, 'days').format('YYYY-MM-DD'), time: '18:00', auditorium: 'HALL 1', movieId: 1 },
        { id: 15, date: dayjs().format('YYYY-MM-DD'), time: '12:00', auditorium: 'HALL 1', movieId: 2 },
        { id: 16, date: dayjs().add(1, 'day').format('YYYY-MM-DD'), time: '15:00', auditorium: 'HALL 1', movieId: 2 },
        { id: 17, date: dayjs().add(2, 'days').format('YYYY-MM-DD'), time: '17:30', auditorium: 'HALL 1', movieId: 2 },
        { id: 18, date: dayjs().add(3, 'days').format('YYYY-MM-DD'), time: '19:00', auditorium: 'HALL 1', movieId: 2 },
        // Add more screenings as needed
    ]);

    return (
        <ScreeningContext.Provider value={{ screenings, setScreenings }}>
            {children}
        </ScreeningContext.Provider>
    );
};
