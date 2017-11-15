import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Lesson from '../lesson/lesson'
import Week from './week.js'
import Topics from './topics.js'
import CreateLesson from './create-lesson.js'
import './lessons.css'
import axios from 'axios'

class Lessons extends Component {
    constructor(props) {
        super(props)
        this.renderTopics = this.renderTopics.bind(this);
        this.renderWeeks = this.renderWeeks.bind(this);
        this.addLesson = this.addLesson.bind(this);

        this.state = {
            mode: "",
            topics: "",
            weeks: ""
        }
    }

    componentWillMount(){

        let that = this;

        axios
        .get('http://localhost:3000/api/lessons/sorted/byweeks')
        .then(function (response) {
          if (response.data) {
            that.setState({weeks:response.data});
          }
  
        });

        axios
        .get('http://localhost:3000/api/lessons/sorted/bytopic')
        .then(function (response) {
          if (response.data) {
            that.setState({topics:response.data});
          }
  
        });
    }

    addLesson(lesson) {

  
        let newWeeks = Object.assign({}, this.state.weeks);
        newWeeks[`week${lesson.WeekNumber}`][`day${lesson.DayNumber}`].push(lesson);
        this.setState({ weeks: newWeeks });
    }

    renderTopics() {
        this.setState({ mode: true })
    }
    renderWeeks() {
        this.setState({ mode: false })
    }

    render() {
        let weekOrTopic = () => {
            if (this.state.mode == true) {
                return Object.keys(this.state.topics).map((topic, index) => (
                    <Topics key={index} lessons={this.state.topics[topic].lessons} topicName={topic} />
                ))
            } else {
                return Object.keys(this.state.weeks).map((week, index) => (
                    <Week key={index} week={this.state.weeks[week]} test={week} weekNumber={week} />
                ))
            }
        }
        return (

            <div className="col-xs-offset-1">
                {/* <h1>LESSONS</h1> */}
                {/* <br />
                <CreateLesson addLesson={this.addLesson} />
                <br /> */}
                <div className = "btn-wrapper">
                    <div className="col-xs-6 btn-sort-weeks-wrapper">
                        <button type="button" className="btn btn-info btn-sort-weeks" onClick={this.renderWeeks}>SORT BY WEEKS !</button>
                    </div>
                    <div className="col-xs-6 btn-sort-stopics-wrapper">
                        <button type="button" className="btn btn-info btn-sort-topics" onClick={this.renderTopics}>SORT BY TOPICS !</button>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
 
                <div className = "row week-topic-wrapper">
                    {weekOrTopic()}
                </div>
                
            </div>
        )
    }
}

export default Lessons