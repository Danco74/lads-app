import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import "./day.css"
//import Lesson from './lesson.js'

class Day extends Component {
    constructor(props) {
        super(props)
    }


    render() {


        return (

            <div className="day-wrapper">
                <h1 className="day-header">DAY {this.props.day}</h1>
                <br />
                <div className="day-topic">
                    {this.props.days.map((day, index) =>
                        <div key={index}>
                        <Link className="weekTopic link" to="/lads/lesson/1" >
                        {/* <Link to={`${this.props.routeprops.url}/`} > */}
                                    {day.Topic.toUpperCase()}
                            </Link>

                        </div>)}
                </div>
            </div>




        )
    }
}

export default Day;