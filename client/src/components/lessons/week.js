import React, { Component } from 'react'
import Day from './day.js'
import './week.css'


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
            <Day routeprops={this.props.routeprops} key={index} day={days} days={this.props.week[days]} />))

        return (

            <div>
                <div className="weekLessons" >
                    <h1 className=" weeksHead">WEEK-{this.props.weekNumber}</h1>

                    <div className=" btn-lessons">{this.state.showPlus &&
                        <a onClick={this.onClick}><i className="fa fa-plus fa-3x"></i></a>}</div>

                    <div className=" btn-lessons">{this.state.showMinus &&
                        <a onClick={this.onClick}><i className="fa fa-minus fa-3x"></i></a>}</div>
                </div>

                <div>{this.state.showDays && days}</div>
            </div>

        );
    };
};


export default Week;