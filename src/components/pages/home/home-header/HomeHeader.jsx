import './HomeHeader.css';
import { AuditoriumSelect } from './select-components/AuditoriumSelect';
import { DateSelect } from './select-components/DateSelect';
import { SortSelect } from './select-components/SortSelect';
import PropTypes from 'prop-types';

export const HomeHeader = ({ screenings, auditoriums, selectedDate, setSelectedDate, sortOption, setSortOption, selectedAuditoriumIds, setSelectedAuditoriumIds }) => {
    return (
        <div className='home-header'>
            <div className='selector-wrapper'>
                <DateSelect screenings={screenings} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                <SortSelect sortOption={sortOption} setSortOption={setSortOption} />
                <AuditoriumSelect auditoriums={auditoriums} screenings={screenings} selectedDate={selectedDate} selectedAuditoriumIds={selectedAuditoriumIds} setSelectedAuditoriumIds={setSelectedAuditoriumIds} />
            </div>
        </div>
    );
};

HomeHeader.propTypes = {
    screenings: PropTypes.arrayOf(PropTypes.shape({
        auditoriumId: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        movieId: PropTypes.string.isRequired,
        startsAt: PropTypes.string.isRequired,
    })).isRequired,
    auditoriums: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        screenWidthMeter: PropTypes.number.isRequired,
    })).isRequired,
    selectedDate: PropTypes.string.isRequired,
    setSelectedDate: PropTypes.func.isRequired,
    sortOption: PropTypes.string.isRequired,
    setSortOption: PropTypes.func.isRequired,
    selectedAuditoriumIds: PropTypes.arrayOf(PropTypes.number).isRequired,
    setSelectedAuditoriumIds: PropTypes.func.isRequired,
};