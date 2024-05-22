import './HomeHeader.css';
import { DateSelector } from './date-selector/DateSelector';
import { SortSelector } from './sort-selector/SortSelector';

export const HomeHeader = ({ selectedDate, setSelectedDate, sortOption, setSortOption }) => {
    return (
        <div className='home-header'>
            <div className='selector-wrapper'>
                <DateSelector selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                <SortSelector sortOption={sortOption} setSortOption={setSortOption} />
            </div>
        </div>
    );
};
