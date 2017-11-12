import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Day from './day.js'


class Week extends Component {
    constructor(props) {
        super(props)
        this.state = { showDays: false }
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({ showDays: !this.state.showDays })
    }

    render() {
        let days = Object.keys(this.props.week).map((days, index) => (
            <Day key={index} index={index} week={this.props.week} day={days} days={this.props.week[days]} />))

        return (
            <div className="row weeksList">
                <div className="col-xs-offset-1 col-xs-10">
                    <h1>{this.props.weekNumber}</h1>

                    <div>{this.state.showButton &&
                        <a onClick={this.onClick} href='#'><i className="fa fa-plus fa-3x"></i></a>}</div>

                    <div>{this.state.showButton &&
                        <a onClick={this.onClick} href='#'><i className="fa fa-minus fa-3x"></i></a>}</div>

                    <div>{this.state.showDays && days}</div>
                </div>
            </div>
        )
    }
}


export default Week;