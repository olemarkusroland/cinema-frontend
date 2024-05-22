import './HomeHeader.css';
import { FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import dayjs from 'dayjs';


export const HomeHeader = ({ selectedDate, setSelectedDate, sortOption, setSortOption, selectedAuditorium, setSelectedAuditorium }) => {
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const handleAuditoriumChange = (event) => {
        setSelectedAuditorium(event.target.value)
    }

    const dates = [
        dayjs(),
        dayjs().add(1, 'day'),
        dayjs().add(2, 'days'),
    ];

    const renderSelectedValue = (value) => {
        const matchingDate = dates.find(date => date.format('YYYY-MM-DD') === value);

        if (!matchingDate) {
            return '';
        }

        if (value === dayjs().format('YYYY-MM-DD')) {
            return <span>Today, {matchingDate.format('ddd DD. MMM')}</span>;
        } else if (value === dayjs().add(1, 'day').format('YYYY-MM-DD')) {
            return <span>Tomorrow, {matchingDate.format('ddd DD. MMM')}</span>;
        } else {
            return <span>{matchingDate.format('ddd DD. MMM')}</span>;
        }
    };

    return (
        <div className='home-header'>
            <div className='selector-wrapper'>
                <FormControl className="date-selector">
                    <InputLabel id="date-select-label">Date</InputLabel>
                    <Select
                        labelId="date-select-label"
                        id="date-select"
                        value={selectedDate}
                        label="Date"
                        onChange={handleDateChange}
                        renderValue={renderSelectedValue}
                        MenuProps={{
                            PaperProps: {
                                className: "date-selector"
                            },
                        }}
                    >
                        {dates.map((date, index) => (
                            <MenuItem key={index} value={date.format('YYYY-MM-DD')}>
                                {date.format('ddd DD. MMM')}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl className="sort-selector">
                    <InputLabel id="sort-select-label">Sort by</InputLabel>
                    <Select
                        labelId="sort-select-label"
                        id="sort-select"
                        value={sortOption}
                        label="Sort by"
                        onChange={handleSortChange}
                        MenuProps={{
                            PaperProps: {
                                className: "sort-selector"
                            },
                        }}
                    >
                        <MenuItem value="startTime">Start Time</MenuItem>
                        <MenuItem value="alphabetical">Alphabetical</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
};
