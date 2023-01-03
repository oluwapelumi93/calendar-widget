import React from 'react';
import { Date, DayOf, Unit } from './styles';
import { hoverColor } from './utils/constants';

const numToDayOfWeek = number => {
  switch (number) {
    case 0:
      return 'Sun';
    case 1:
      return 'Mon';
    case 2:
      return 'Tues';
    case 3:
      return 'Wed';
    case 4:
      return 'Thur';
    case 5:
      return 'Fri';
    case 6:
      return 'Sat';
    case 7:
      return 'Sun';
    default:
      return '';
  }
};

const Day = ({ weekDay, date, month, year, grey, highlight, setDate }) => {
  return (
    <Unit
      setDate={setDate ? hoverColor : 'none'}
      grey={grey}
      highlight={highlight}
      onClick={setDate ? () => setDate(date, month, year) : f => f}
    >
      <DayOf>{numToDayOfWeek(weekDay)}</DayOf>
      <Date>{date.toString()}</Date>
    </Unit>
  );
};

export default Day;
