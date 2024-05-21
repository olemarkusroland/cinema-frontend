import React from 'react';
import { Link } from 'react-router-dom';
import './PlaceTimeCard.css';

export const PlaceTimeCard = ({ screening, isClickable = true, includeDate=true }) => {
  const { id, date, time, auditorium } = screening;

  const content = (
    <div className={`place-time ${isClickable ? 'place-time--clickable' : 'place-time--non-clickable'} screening-card-place-time `}>
      {includeDate && <p className={`date ${isClickable ? 'date--clickable' : 'date--non-clickable'}`}>{date}</p>}
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
