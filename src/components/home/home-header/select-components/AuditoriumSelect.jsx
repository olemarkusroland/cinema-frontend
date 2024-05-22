import '../HomeHeader.css';
import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';

export const AuditoriumSelect = ({ selectedAuditorium, setSelectedAuditorium }) => {
    const handleChange = (event) => {
        setSelectedAuditorium(event.target.value);
    };

    const auditoriums = [
        'HALL 1',
        'HALL 2'
    ];

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
                {auditoriums.map((auditorium, index) => (
                    <MenuItem key={index} value={auditorium}>
                        {auditorium}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
