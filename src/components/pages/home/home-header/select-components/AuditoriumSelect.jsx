import '../HomeHeader.css';
import { useEffect } from 'react';
import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

export const AuditoriumSelect = ({ auditoriums, screenings, selectedDate, selectedAuditoriumIds, setSelectedAuditoriumIds }) => {
    const handleChange = (event) => {
        setSelectedAuditoriumIds(event.target.value);
    };

    // Filter screenings by selected date and extract unique auditoriums
    const availableAuditoriumIds = Array.from(new Set(
        screenings
            .filter(screening => dayjs(screening.date, 'DD MMM YYYY').format('YYYY-MM-DD') === selectedDate)
            .map(screening => screening.auditoriumId)
    ));

    const availableAuditoriums = auditoriums.filter(auditorium => availableAuditoriumIds.includes(auditorium.id));

    const naturalSort = (a, b) => {
        const aNum = parseInt(a.id, 10);
        const bNum = parseInt(b.id, 10);
        return aNum - bNum;
    };

    availableAuditoriums.sort(naturalSort);

    // Reset selected auditorium if it is not available for the new selected date
    useEffect(() => {
        setSelectedAuditoriumIds(prevSelected => 
            prevSelected.filter(auditoriumId => availableAuditoriumIds.includes(auditoriumId))
        );
    }, [selectedDate, availableAuditoriumIds, setSelectedAuditoriumIds]);

    return (
        <FormControl className="selector">
            <InputLabel id="auditorium-select-label">Choose auditoriums</InputLabel>
            <Select
                multiple
                labelId="auditorium-select-label"
                id="auditorium-select"
                value={selectedAuditoriumIds}
                input={<OutlinedInput id="select-multiple-chip" label="Choose auditoriums" />}
                onChange={handleChange}
                MenuProps={{
                    disableScrollLock: true,
                    PaperProps: {
                        className: "selector"
                    },
                }}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((id) => {
                            const auditorium = auditoriums.find(a => a.id === id);
                            return (
                                <Chip
                                    key={id}
                                    label={auditorium ? auditorium.name : id}
                                    sx={{
                                        backgroundColor: '#640000',
                                        color: 'white'
                                    }}
                                />
                            );
                        })}
                    </Box>
                )}
            >
                {availableAuditoriums.map((auditorium) => (
                    <MenuItem key={auditorium.id} value={auditorium.id}>
                        {auditorium.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

AuditoriumSelect.propTypes = {
    auditoriums: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        screenWidthMeter: PropTypes.number.isRequired,
    })).isRequired,
    screenings: PropTypes.arrayOf(PropTypes.shape({
        auditoriumId: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
    })).isRequired,
    selectedDate: PropTypes.string.isRequired,
    selectedAuditoriumIds: PropTypes.arrayOf(PropTypes.number).isRequired,
    setSelectedAuditoriumIds: PropTypes.func.isRequired,
};
