import './Home.css';
import { ScreeningCard } from '../screening-card/ScreeningCard';
import { useState, useContext } from 'react';
import { FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import dayjs from 'dayjs';
import { ScreeningContext } from '../../context/ScreeningContext';


export const Home = () => {
    const todayFormatted = dayjs().format('YYYY-MM-DD');
    const { screenings } = useContext(ScreeningContext);
    const [selectedDate, setSelectedDate] = useState(todayFormatted);

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const dates = [ //TODO: Should include any date with a screening
        dayjs(),
        dayjs().add(1, 'day'),
        dayjs().add(2, 'days'),
    ];

    const renderSelectedValue = (value) => { //TODO: Add tomorrow
        if (value === todayFormatted) {
            return 'Today';
        }
        const matchingDate = dates.find(date => date.format('YYYY-MM-DD') === value);
        return matchingDate ? matchingDate.format('ddd DD. MMM') : '';
    };

    const filteredScreenings = screenings.filter(screening => screening.date === selectedDate);

    return (
        <div className="home">
            <div className='date-selector'>
                <FormControl sx={{ minWidth: 145 }}>
                    <InputLabel id="date-select-label">Date</InputLabel>
                    <Select
                        labelId="date-select-label"
                        id="date-select"
                        value={selectedDate}
                        label="Date"
                        onChange={handleDateChange}
                        renderValue={renderSelectedValue}
                    >
                        {dates.map((date, index) => (
                            <MenuItem key={index} value={date.format('YYYY-MM-DD')}>
                                {date.format('ddd DD. MMM')}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div className="screenings">
                {filteredScreenings.map(screening => (
                    <ScreeningCard key={screening.id} screening={screening} includeDate={false} />
                ))}
            </div>
        </div>
    );
};
