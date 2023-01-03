import React, { Component } from 'react';
import TopBar from './TopBar';
import DayGrid from './DayGrid';
import moment from 'moment';
import { AppContainer } from './styles';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment(new Date()),
            dateToDisplay: new Date(),
        };
        this.incrementMonth = this.incrementMonth.bind(this);
        this.decrementMonth = this.decrementMonth.bind(this);
        this.setToToday = this.setToToday.bind(this);
        this.setDateToDisplay = this.setDateToDisplay.bind(this);
    }

    // increment the current month by 1 month
    incrementMonth() {
        this.setState(state => ({
            date: state.date.month(state.date.month() + 1),
        }));
    }

    // decrement the current month by 1 month
    decrementMonth() {
        this.setState(state => ({
            date: state.date.month(state.date.month() - 1),
        }));
    }

    // set the date property to current date
    setToToday() {
        this.setState({
            date: moment(new Date()),
            dateToDisplay: new Date(),
        });
    }

    // function that returns a date object of a given date, month and year
    setDateToDisplay(date, month, year) {
        this.setState({
            dateToDisplay: new Date(year, month, date),
        });
    }

    render() {
        return ( < AppContainer >
            <
            TopBar incMonth = { this.incrementMonth }
            decMonth = { this.decrementMonth }
            today = { this.setToToday }
            month = { this.state.date.month() }
            year = { this.state.date.year() }
            /> <
            DayGrid year = { this.state.date.year() }
            month = { this.state.date.month() }
            days = { this.state.date.daysInMonth() }
            dateToDisplay = { this.state.dateToDisplay }
            setDate = { this.setDateToDisplay }
            /> </AppContainer >
        );
    }
}

export default App;