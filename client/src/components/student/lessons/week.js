import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Day from './day.js'


class Week extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showDays: false,
            showPlus: true,
            showMinus: false
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({ showDays: !this.state.showDays })
        this.setState({ showPlus: !this.state.showPlus })
        this.setState({ showMinus: !this.state.showMinus })
    }

    render() {
        let days = Object.keys(this.props.week).map((days, index) => (
            <Day key={index}  day={days} days={this.props.week[days]} />))

        return (
            <div className="row weeksList">
                <div className="col-xs-offset-1 col-xs-10">
                    <h1 className="weekLessons weeksHead">{this.props.weekNumber}</h1>

                    <div className="weekLessons btn-lessons">{this.state.showPlus &&
                        <a onClick={this.onClick} href='#'><i className="fa fa-plus fa-3x"></i></a>}</div>

                    <div className="weekLessons btn-lessons">{this.state.showMinus &&
                        <a onClick={this.onClick} href='#'><i className="fa fa-minus fa-3x"></i></a>}</div>

                    <div>{this.state.showDays && days}</div>
                </div>
            </div>
        );
    };
};


export default Week;