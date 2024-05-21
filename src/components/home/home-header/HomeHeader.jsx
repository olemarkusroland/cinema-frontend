import './HomeHeader.css'

import { FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import dayjs from 'dayjs';

export const HomeHeader = ({selectedDate, setSelectedDate, today}) => {
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const dates = [
        dayjs(),
        dayjs().add(1, 'day'),
        dayjs().add(2, 'days'),
    ];

    const renderSelectedValue = (value) => {
        if (value === today) {
            return <span style={{ color: 'white' }}>Today</span>;
        }
        const matchingDate = dates.find(date => date.format('YYYY-MM-DD') === value);
        return matchingDate ? <span style={{ color: 'white' }}>{matchingDate.format('ddd DD. MMM')}</span> : '';
    };

    return (
        <div className='home-header'>
            <div className='date-selector'>
                <FormControl sx={{
                    minWidth: 145,
                    backgroundColor: '#131313',
                    borderRadius: '4px',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#630000',
                            borderWidth: '2px',
                        },
                        '&:hover fieldset': {
                            borderColor: '#630000',
                            borderWidth: '2px',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#630000',
                            borderWidth: '2px',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#630000',
                        fontWeight: 'bold',
                    },
                    '& .MuiSelect-root': {
                        backgroundColor: '#131313',
                        color: 'white',
                        fontWeight: 'bold',
                    },
                    '& .MuiSvgIcon-root': {
                        color: 'white',
                    },
                    '& .MuiPaper-root': {
                        backgroundColor: '#131313',
                    },
                }}>
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
                                sx: {
                                    bgcolor: '#131313',
                                    '& .MuiMenuItem-root': {
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: '#131313',
                                        },
                                        '&.Mui-selected': {
                                            backgroundColor: '#131313',
                                            color: 'white',
                                            '&:hover': {
                                                backgroundColor: '#131313',
                                            },
                                        },
                                    },
                                },
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
            </div>
        </div>
    )
}