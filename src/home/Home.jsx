import './Home.css';
import { ScreeningCard } from "../screening-card/ScreeningCard";
import { useState } from "react";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import dayjs from 'dayjs';

export const Home = () => {
    // Format today's date for initial state and comparison
    const todayFormatted = dayjs().format('YYYY-MM-DD');
    const [selectedDate, setSelectedDate] = useState(todayFormatted);

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const dates = [
        dayjs(),
        dayjs().add(1, 'day'),
        dayjs().add(2, 'days'),
    ];

    // Custom rendering of the selected value
    const renderSelectedValue = (value) => {
        // Check if the selected value is today
        if (value === todayFormatted) {
            return 'Today';
        }
        // Find the matching date object and format it
        const matchingDate = dates.find(date => date.format('YYYY-MM-DD') === value);
        return matchingDate ? matchingDate.format('ddd DD. MMM') : '';
    };

    return (
        <div className="home">
            <div className='date-selector'>
                <FormControl sx={{ 
                    minWidth: 145, 
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#630000',
                        },
                        '&:hover fieldset': {
                            borderColor: '#ff5151',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#ff5151',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#630000',
                    },
                    '& .MuiSelect-root': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: '#630000',
                        fontWeight: 'bold',
                    },
                    '& .MuiSvgIcon-root': {
                        color: '#630000',
                    },
                }}>
                    <InputLabel id="date-select-label">Date</InputLabel>
                    <Select
                        labelId="date-select-label"
                        id="date-select"
                        value={selectedDate}
                        label="Date"
                        onChange={handleDateChange}
                        renderValue={renderSelectedValue} // Use custom render logic
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
                <ScreeningCard />
                <ScreeningCard />
                <ScreeningCard />
                <ScreeningCard />
                <ScreeningCard />
                <ScreeningCard />
                <ScreeningCard />
            </div>
        </div>
    );
};
