import React from 'react';
import poster from '../assets/pusur-filmen.webp';

import './Movie.css';
import dayjs from 'dayjs';
import { PlaceTime } from '../placeTime/PlaceTime';

export const Movie = () => {
    const dates = Array.from({ length: 20 }, (_, i) => dayjs().add(i, 'day').format('ddd DD. MMM'));

    return (
        <div className='movie'>
            <div className='movie-header'>
                <img
                    className="movie-poster"
                    src={poster}
                    alt="Pusur Filmen Poster"
                />
                <div className='movie-details'>
                    <h1 className='movie-title'>Pusur Filmen</h1>
                    <p className='movie-description'>
                        Pusur Filmen is a heartwarming adventure that follows the mischievous yet lovable cat Pusur. 
                        Join Pusur as he navigates through hilarious and exciting escapades, meeting a cast of quirky 
                        characters along the way. From epic chases to touching moments of friendship, this film promises 
                        to entertain audiences of all ages with its charm and humor.
                    </p>
                </div>
            </div>
            <div className='place-times'>
                {dates.map((date, index) => (
                    <PlaceTime key={index} date={date} className="movie-place-time" />
                ))}
            </div>
        </div>
    );
};
