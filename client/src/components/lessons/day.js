import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import "./day.css"
//import Lesson from './lesson.js'

class Day extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        // const {description,img,name,tempCelsius} = this.props.city;
        // console.log(this.props.text)


        return (


            
                <div className="day-wrapper">
                    <div className="day-header">DAY {this.props.day}</div>
                    <br />
                    <div className="day-topic">
                        {this.props.days.map((day, index) =>
                            <div key={index}>
                                <a href="#" className="weekTopic">
                                    {day.Topic}
                                </a>

                            </div>)}
                    </div>
                </div>
            



        )
    }
}

export default Day;