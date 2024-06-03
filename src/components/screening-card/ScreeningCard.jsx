import './ScreeningCard.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { useContext } from 'react';
import { AuditoriumContext } from '../../context/AuditoriumContext';

export const ScreeningCard = ({ screening, isClickable = true, includeDate = true }) => {
  const { id, date, time } = screening;
  const { auditoriums } = useContext(AuditoriumContext)

  const auditorium = auditoriums.find(a => a.id === screening.auditoriumId)

  const formattedDate = dayjs(date).format('dddd DD.MM');

  const content = (
    <div className={`place-time ${isClickable ? 'place-time--clickable' : 'place-time--non-clickable'} screening-card-place-time`}>
      {includeDate && <p className={`date ${isClickable ? 'date--clickable' : 'date--non-clickable'}`}>{formattedDate}</p>}
      <p className='time'>{time}</p>
      <p className='auditorium'>{auditorium.name}</p>
    </div>
  );

  return isClickable ? (
    <Link 
      to={`/tickets/${id}`}
      state={{screening}}
    >
      {content}
    </Link>
  ) : (
    content
  );
};

ScreeningCard.propTypes = {
  screening: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    auditorium: PropTypes.string.isRequired,
  }).isRequired,
  isClickable: PropTypes.bool,
  includeDate: PropTypes.bool
};
