import '../HomeHeader.css';
import { useEffect } from 'react';
import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import dayjs from 'dayjs';

export const AuditoriumSelect = ({ screenings, selectedDate, selectedAuditorium, setSelectedAuditorium }) => {
    const handleChange = (event) => {
        setSelectedAuditorium(event.target.value);
    };

    // Filter screenings by selected date and extract unique auditoriums
    const availableAuditoriums = Array.from(new Set(
        screenings
            .filter(screening => dayjs(screening.date, 'DD MMM YYYY').format('YYYY-MM-DD') === selectedDate)
            .map(screening => screening.auditorium)
    ));

    // Custom sorting function for natural order sorting
    const naturalSort = (a, b) => {
        const aNum = parseInt(a.match(/\d+/)[0], 10);
        const bNum = parseInt(b.match(/\d+/)[0], 10);
        return aNum - bNum;
    };

    availableAuditoriums.sort(naturalSort);

    useEffect(() => {
        // Reset selected auditorium if it is not available for the new selected date
        setSelectedAuditorium(prevSelected => 
            prevSelected.filter(auditorium => availableAuditoriums.includes(auditorium))
        );
    }, [selectedDate, availableAuditoriums, setSelectedAuditorium]);

    return (
        <FormControl className="selector">
            <InputLabel id="auditorium-select-label">Choose auditoriums</InputLabel>
            <Select
                multiple
                labelId="auditorium-select-label"
                id="auditorium-select"
                value={selectedAuditorium}
                input={<OutlinedInput id="select-multiple-chip" label="Choose auditoriums" />}
                onChange={handleChange}
                MenuProps={{
                    PaperProps: {
                        className: "selector"
                    },
                }}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip
                                key={value}
                                label={value}
                                sx={{
                                    backgroundColor: '#640000',
                                    color: 'white'
                                }}
                            />
                        ))}
                    </Box>
                )}
            >
                {availableAuditoriums.map((auditorium, index) => (
                    <MenuItem key={index} value={auditorium}>
                        {auditorium}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
