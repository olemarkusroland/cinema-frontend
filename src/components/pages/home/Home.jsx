import './Home.css';

import { useState, useContext } from 'react';
import dayjs from 'dayjs';

import { HomeHeader } from './home-header/HomeHeader';
import { ScreeningContext } from '../../../context/ScreeningContext';
import { MovieContext } from '../../../context/MovieContext';
import { TicketCard } from '../../ticket-card/TicketCard';
import { AuditoriumContext } from '../../../context/AuditoriumContext';

export const Home = () => {
    const todayFormatted = dayjs().format('YYYY-MM-DD');
    
    const [selectedDate, setSelectedDate] = useState(todayFormatted);
    const [sortOption, setSortOption] = useState('startTime');
    const [selectedAuditoriumIds, setSelectedAuditoriumIds] = useState([]);
    
    const { screenings } = useContext(ScreeningContext);
    const { movies } = useContext(MovieContext);
    const { auditoriums } = useContext(AuditoriumContext);

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
    
    if (!screenings) {
        return (
            <p>Screenings not found</p>
        )
    }
    
    const filteredScreenings = screenings
        .filter(screening => screening.date === selectedDate)
        .filter(screening => selectedAuditoriumIds.length === 0 || selectedAuditoriumIds.includes(screening.auditoriumId));

    const sortedScreenings = sortScreenings(filteredScreenings, sortOption);
    
    return (
        <div className="home">
            <HomeHeader 
                screenings={screenings}
                auditoriums={auditoriums}
                selectedDate={selectedDate} 
                setSelectedDate={setSelectedDate} 
                sortOption={sortOption} 
                setSortOption={setSortOption} 
                selectedAuditoriumIds={selectedAuditoriumIds}
                setSelectedAuditoriumIds={setSelectedAuditoriumIds}
            />
            <div className="screenings">
                {sortedScreenings.map(screening => (
                    <TicketCard
                        key={screening.id} 
                        movie={movies.find(m => m.imdbID === screening.movieId)} 
                        screening={screening} 
                        includeDate={false} 
                    />
                ))}
            </div>
        </div>
    );
};
