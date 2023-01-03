import { calWidth, rowHeight, borderRadius, hoverColor } from './utils/constants';
import styled from 'styled-components';

export const AppContainer = styled.div`
  border: 1px solid black;
  border-radius: ${borderRadius}px;
  margin-left: auto;
  margin-right: auto;
  width: ${calWidth}px;
  margin-top: calc(50vh - ${rowHeight * 5}px);
  background-color: white;
  box-shadow: 1px 1px 1px;
`;

export const ContainerDiv = styled.div`
  width: ${calWidth}px;
  height: ${rowHeight + 20}px;
  background-color: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  box-sizing: border-box;
  border-top-left-radius: ${borderRadius}px;
  border-top-right-radius: ${borderRadius}px;
`;

export const buttonBoxShadow = 'box-shadow: 1px 1px 1px;';

export const ArrowContainer = styled.div`
  height: auto;
  width: auto;
  background-color: none;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid black;
  border-radius: ${borderRadius}px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  ${buttonBoxShadow}
  &:hover {
    background-color: ${hoverColor};
  }
  &:active {
    background-color: white;
  }
`;

export const Month = styled.div`
  color: black;
  background-color: none;
  padding: 0;
  margin-bottom: 0;
  margin-right: 6px;
`;

export const Year = styled.div`
  color: black;
  margin-bottom: 0;
  padding: 0;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  padding: 0;
  font-size: 20px;
  background-color: none;
`;

export const TodayButton = styled.div`
  border-radius: ${borderRadius}px;
  background-color: none;
  border: 1px solid black;
  padding-left: 10px;
  padding-right: 10px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  ${buttonBoxShadow}
  &:hover {
    background-color: ${hoverColor};
  }
  &:active {
    background-color: white;
  }
`;

export const HiddenContainer = styled.div`
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
  height: ${({ days }) => (Math.round(days / 8) + 1) * rowHeight}px;
  width: ${calWidth}px;
`;

export const Unit = styled.div`
  width: ${calWidth / 7}px;
  height: ${rowHeight}px;
  border: 1px solid black;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${({ grey }) => (grey ? 'hsl( 11, 0%, 90%)' : 'none')};
  color: ${({ highlight }) => (highlight ? 'red' : 'none')};
  &:hover {
    background-color: ${({ setDate }) => setDate};
  }
`;

export const DayOf = styled.p`
  text-align: center;
  font-size: 10px;
  margin: 0;
`;

export const Date = styled.p`
  text-align: center;
  font-size: 12px;
  padding: 0;
  margin-top: 0;
  margin-bottom: -10px;
`;
