import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Lesson from '../lesson/lesson'
import Week from './week.js'
import Topics from './topics.js'
import CreateLesson from './create-lesson.js'
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
                    <Topics key={index} topics={this.state.topics[topic].lessons} topicName={topic} />
                ))
            } else {
                return Object.keys(this.state.weeks).map((week, index) => (
                    <Week key={index} week={this.state.weeks[week]} test={week} weekNumber={week} />
                ))
            }
        }
        return (

            <div>
                <h1>Lessons Component</h1>
                <br />
                <Link to="/lesson">Lesson</Link>
                <Link to='/Home'>home is where the heart is</Link>
                <CreateLesson addLesson={this.addLesson} />
                <br />
                <button type="button" className="btn btn-info" onClick={this.renderWeeks}>SORT BY WEEKS !</button>
                <button type="button" className="btn btn-warning" onClick={this.renderTopics}>SORT BY TOPICS !</button>
                <div>
                    {weekOrTopic()}
                </div>
            </div>
        )
    }
}

export default Lessons