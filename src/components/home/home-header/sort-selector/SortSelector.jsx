import '../HomeHeader.css';
import { FormControl, MenuItem, Select, InputLabel } from '@mui/material';

export const SortSelector = ({ sortOption, setSortOption }) => {
    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    return (
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
    );
};
