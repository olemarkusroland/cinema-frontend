import '../HomeHeader.css';
import { FormControl, MenuItem, Select, InputLabel } from '@mui/material';

export const SortSelect = ({ sortOption, setSortOption }) => {
    const handleChange = (event) => {
        setSortOption(event.target.value);
    };

    return (
        <FormControl className="selector">
            <InputLabel id="sort-select-label">Sort by</InputLabel>
            <Select
                labelId="sort-select-label"
                id="sort-select"
                value={sortOption}
                label="Sort by"
                onChange={handleChange}
                MenuProps={{
                    disableScrollLock: true,
                    PaperProps: {
                        className: "selector"
                    },
                }}
            >
                <MenuItem value="startTime">Start Time</MenuItem>
                <MenuItem value="alphabetical">Alphabetical</MenuItem>
            </Select>
        </FormControl>
    );
};
