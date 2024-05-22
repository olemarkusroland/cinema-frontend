import '../HomeHeader.css';
import { FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import dayjs from 'dayjs';

export const DateSelect = ({ selectedDate, setSelectedDate }) => {
    const handleChange = (event) => {
        setSelectedDate(event.target.value);
    };

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
        <FormControl className="selector">
            <InputLabel id="date-select-label">Date</InputLabel>
            <Select
                labelId="date-select-label"
                id="date-select"
                value={selectedDate}
                label="Date"
                onChange={handleChange}
                renderValue={renderSelectedValue}
                MenuProps={{
                    PaperProps: {
                        className: "selector"
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
    );
};
