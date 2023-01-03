import React from 'react';
import Day from './Day';
import moment from 'moment';
import { Grid } from './styles';

const DayGrid = ({ year, month, days, dateToDisplay, setDate }) => {
    const daysToRender = [];

    // get the first day of the month (0 based) sun =0,mon =1...
    // to start the date from
    const firstDayOfMonth = moment()
        .month(month)
        .date(1)
        .day();

    // // date the previous month ended
    const prevMonthDays = moment()
        .month(month - 1)
        .daysInMonth();

    // loop to generate previous month date on the Grid in Gray boxes
    for (let y = prevMonthDays - firstDayOfMonth + 1, x = 1; y <= prevMonthDays; y++, x++) {
        daysToRender.push( <
            Day key = { Math.random() * 10000 }
            weekDay = { x - 1 }
            date = { y }
            month = { month }
            year = { year }
            grey = { true }
            />,
        );
    }

    // loops through and generate grid with the days in a month
    // and check if the current date is today to add a highlight the day
    for (let i = 1; i <= days; i++) {
        if (
            i === dateToDisplay.getDate() &&
            dateToDisplay.getMonth() === month &&
            dateToDisplay.getFullYear() === year
        ) {
            daysToRender.push( <
                Day key = { i }
                weekDay = {
                    moment()
                    .month(month)
                    .date(i)
                    .day()
                }
                date = { i }
                month = { month }
                year = { year }
                grey = { false }
                setDate = { setDate }
                highlight = { true }
                />,
            );
        } else {
            daysToRender.push( <
                Day key = { i }
                weekDay = {
                    moment()
                    .month(month)
                    .date(i)
                    .day()
                }
                date = { i }
                month = { month }
                year = { year }
                grey = { false }
                setDate = { setDate }
                />,
            );
        }
    }
    // to complete then grid after the last day of the month
    const lastDayOfMonth = moment()
        .month(month)
        .date(days)
        .day();

    for (let x = lastDayOfMonth + 1, y = 1; x < 7; x++, y++) {
        daysToRender.push( <
            Day key = { Math.random() * 10000 }
            weekDay = { x }
            date = { y }
            month = { month }
            year = { year }
            grey = { true }
            />,
        );
    }
    const numberOfDaysRendered = daysToRender.length;
    return <Grid days = { numberOfDaysRendered } > { daysToRender } < /Grid>;
};

export default DayGrid;