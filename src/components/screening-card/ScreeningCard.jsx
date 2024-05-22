import './ScreeningCard.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

export const ScreeningCard = ({ screening, isClickable = true, includeDate = true }) => {
  const { id, date, time, auditorium } = screening;

  const formattedDate = dayjs(date).format('dddd DD.MM');

  const content = (
    <div className={`place-time ${isClickable ? 'place-time--clickable' : 'place-time--non-clickable'} screening-card-place-time`}>
      {includeDate && <p className={`date ${isClickable ? 'date--clickable' : 'date--non-clickable'}`}>{formattedDate}</p>}
      <p className='time'>{time}</p>
      <p className='auditorium'>{auditorium}</p>
    </div>
  );

  return isClickable ? (
    <Link to={`/tickets/${id}`}>
      {content}
    </Link>
  ) : (
    content
  );
};

ScreeningCard.propTypes = {
  screening: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    auditorium: PropTypes.string.isRequired,
  }).isRequired,
  isClickable: PropTypes.bool,
  includeDate: PropTypes.bool
};
