import './HomeHeader.css';
import { AuditoriumSelect } from './select-components/AuditoriumSelect';
import { DateSelect } from './select-components/DateSelect';
import { SortSelect } from './select-components/SortSelect';

export const HomeHeader = ({ selectedDate, setSelectedDate, sortOption, setSortOption, selectedAuditorium, setSelectedAuditorium }) => {
    return (
        <div className='home-header'>
            <div className='selector-wrapper'>
                <DateSelect selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                <SortSelect sortOption={sortOption} setSortOption={setSortOption} />
                <AuditoriumSelect selectedAuditorium={selectedAuditorium} setSelectedAuditorium={setSelectedAuditorium} />
            </div>
        </div>
    );
};
