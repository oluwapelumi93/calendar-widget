import React from 'react';

import {
  ArrowContainer,
  ContainerDiv,
  DateContainer,
  HiddenContainer,
  Month,
  TodayButton,
  Year,
} from './styles';

// function that returns the month (String) of a given number
const numToMonth = num => {
  switch (num) {
    case 0:
      return 'January';
    case 1:
      return 'February';
    case 2:
      return 'March';
    case 3:
      return 'April';
    case 4:
      return 'May';
    case 5:
      return 'June';
    case 6:
      return 'July';
    case 7:
      return 'August';
    case 8:
      return 'September';
    case 9:
      return 'October';
    case 10:
      return 'November';
    case 11:
      return 'December';
    default:
      return '';
  }
};

export const TopBar = ({ month, year, incMonth, decMonth, today }) => (
  <ContainerDiv>
    <ArrowContainer onClick={decMonth}>Prev</ArrowContainer>
    <HiddenContainer>Today</HiddenContainer>
    <DateContainer>
      <Month>{numToMonth(month)}</Month>
      <Year>{year}</Year>
    </DateContainer>
    <TodayButton onClick={today}>Today</TodayButton>
    <ArrowContainer onClick={incMonth}>Next</ArrowContainer>
  </ContainerDiv>
);

export default TopBar;
