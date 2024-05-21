import './Home.css';
import { ScreeningCard } from '../screening-card/ScreeningCard';
import { useState, useContext } from 'react';

import dayjs from 'dayjs';
import { ScreeningContext } from '../../context/ScreeningContext';
import { HomeHeader } from './home-header/HomeHeader';

export const Home = () => {
    const todayFormatted = dayjs().format('YYYY-MM-DD');
    const { screenings } = useContext(ScreeningContext);
    const [selectedDate, setSelectedDate] = useState(todayFormatted);

    const filteredScreenings = screenings.filter(screening => screening.date === selectedDate);

    return (
        <div className="home">
            <HomeHeader selectedDate={selectedDate} setSelectedDate={setSelectedDate} today={todayFormatted}/>
            <div className="screenings">
                {filteredScreenings.map(screening => (
                    <ScreeningCard key={screening.id} screening={screening} includeDate={false} />
                ))}
            </div>
        </div>
    );
};
