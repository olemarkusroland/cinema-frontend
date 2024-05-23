import './Home.css';
import { TicketCard } from '../ticket-card/TicketCard';
import { ScreeningContext } from '../../context/ScreeningContext';
import { MovieContext } from '../../context/MovieContext';
import { HomeHeader } from './home-header/HomeHeader';

import { useState, useContext } from 'react';
import dayjs from 'dayjs';

export const Home = () => {
    const todayFormatted = dayjs().format('YYYY-MM-DD');
    
    const [selectedDate, setSelectedDate] = useState(todayFormatted);
    const [sortOption, setSortOption] = useState('startTime');
    const [selectedAuditoriums, setSelectedAuditoriums] = useState([]);
    
    const { screenings } = useContext(ScreeningContext);
    const { movies } = useContext(MovieContext);

    const shortByStartTime = (screenings) => {
        return screenings.sort((a, b) => {
            const [h1, m1] = a.time.split(':').map(Number);
            const [h2, m2] = b.time.split(':').map(Number);
            return h1 - h2 || m1 - m2;
        });
    };

    const shortByAlphabetical = (screenings) => {
        return screenings.sort((a, b) => {
            const movieA = movies.find(movie => movie.id === a.movieId);
            const movieB = movies.find(movie => movie.id === b.movieId);
            return movieA.name.localeCompare(movieB.name);
        });
    };

    const sortScreenings = (screenings, option) => {
        switch (option) {
            case 'startTime':
                return shortByStartTime(screenings);
            case 'alphabetical':
                return shortByAlphabetical(screenings);
            default:
                return screenings;
        }
    };


    if(!screenings){
        return (
            <p>Screenings not found</p>
        )
    }

    screenings.forEach(s => {
        console.log("Screening date: " + s.date)
    });
    
    const filteredScreenings = screenings
        .filter(screening => screening.date === selectedDate)
        .filter(screening => selectedAuditoriums.length === 0 || selectedAuditoriums.includes(screening.auditorium));

    const sortedScreenings = sortScreenings(filteredScreenings, sortOption);
    

    return (
        <div className="home">
            <HomeHeader 
                selectedDate={selectedDate} 
                setSelectedDate={setSelectedDate} 
                sortOption={sortOption} 
                setSortOption={setSortOption} 
                selectedAuditorium={selectedAuditoriums}
                setSelectedAuditorium={setSelectedAuditoriums}
            />
            <div className="screenings">
                {sortedScreenings.map(screening => (
                    <TicketCard key={screening.id} screening={screening} includeDate={false} />
                ))}
            </div>
        </div>
    );
};
