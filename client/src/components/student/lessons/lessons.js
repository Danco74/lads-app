import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Lesson from '../lesson/lesson'
import Week from './week.js'
import Topics from './topics.js'
import CreateLesson from './create-lesson.js'

class Lessons extends Component {
    constructor(props) {
        super(props)
        this.renderTopics = this.renderTopics.bind(this);
        this.renderWeeks = this.renderWeeks.bind(this);
        this.addLesson = this.addLesson.bind(this);

        this.state = {
            mode: "",
            topics:
            {
                "React": {
                    "logo": "http://url",
                    "lessons": [
                        "Intro to React",
                        "React Advanced",
                        "React Project"
                    ],
                },
                "Angular": {
                    "logo": "http://url",
                    "lessons": [
                        "Basics in Angular",
                        "Angular SpaceBook"
                    ],
                },
                "Computer Hardware": {
                    "logo": "http://url",
                    "lessons": [
                        "Intro",
                        "Advanced Science",
                    ],
                },
                "Meaningless shit": {
                    "logo": "http://url",
                    "lessons": [
                        "Recursion",
                        "Bot",
                        "Authentication"
                    ]
                },
                "JQuery": {
                    "logo": "http://url",
                    "lessons": [
                        "Recursion",
                        "Bot",
                        "Authentication"
                    ]
                },
                "Amitay": {
                    "logo": "http://url",
                    "lessons": [
                        "lesson1",
                        "lesson2",
                        "lesson3"
                    ]
                },
            },
            weeks:
            {
                "week1": {
                    "day1": [
                        {
                            "id": 1,
                            "Topic": "intro intro2",
                            "Description": "an important lesson",
                            "LogoUrl": "http://url",
                            "WeekNumber": 0,
                            "DayNumber": 1
                        }
                    ]
                },
                "week2": {
                    "day1": [
                        {
                            "id": 4,
                            "Topic": "js",
                            "Description": "an important lessons",
                            "LogoUrl": "http://url",
                            "WeekNumber": 1,
                            "DayNumber": 2
                        }
                    ],
                    "day2": [
                        {
                            "id": 5,
                            "Topic": "amitay topic",
                            "Description": "NOT",
                            "LogoUrl": "http://url",
                            "WeekNumber": 1,
                            "DayNumber": 3
                        }
                    ],
                    "day3": [
                        {
                            "id": 6,
                            "Topic": "js",
                            "Description": "what is this",
                            "LogoUrl": "http://url",
                            "WeekNumber": 1,
                            "DayNumber": 4
                        }
                    ]
                },
                "week3": {
                    "day1": [
                        {
                            "id": 8,
                            "Topic": "angular",
                            "Description": "description bla bvlbal blb",
                            "LogoUrl": "http://url",
                            "WeekNumber": 2,
                            "DayNumber": 1
                        }
                    ],
                    "day2": [
                        {
                            "id": 9,
                            "Topic": "angular",
                            "Description": "description bla bvlbal blb",
                            "LogoUrl": "http://url",
                            "WeekNumber": 2,
                            "DayNumber": 2
                        }
                    ],
                    "day3": [
                        {
                            "id": 10,
                            "Topic": "angular",
                            "Description": "description bla bvlbal blb",
                            "LogoUrl": "http://url",
                            "WeekNumber": 2,
                            "DayNumber": 3
                        }
                    ],
                    "day4": [
                        {
                            "id": 7,
                            "Topic": "angular",
                            "Description": "description bla bvlbal blb",
                            "LogoUrl": "http://url",
                            "WeekNumber": 2,
                            "DayNumber": 4
                        }
                    ],
                    "day5": [
                        {
                            "id": 7,
                            "Topic": "angular",
                            "Description": "description bla bvlbal blb",
                            "LogoUrl": "http://url",
                            "WeekNumber": 2,
                            "DayNumber": 4
                        }
                    ]
                },
                "week4": {
                    "day1": [
                        {
                            "id": 11,
                            "Topic": "react",
                            "Description": "description bla bvlbal blb",
                            "LogoUrl": "http://url",
                            "WeekNumber": 3,
                            "DayNumber": 1
                        }
                    ],
                    "day2": [
                        {
                            "id": 12,
                            "Topic": "react",
                            "Description": "description bla bvlbal blb",
                            "LogoUrl": "http://url",
                            "WeekNumber": 3,
                            "DayNumber": 2
                        }
                    ],
                    "day3": [
                        {
                            "id": 13,
                            "Topic": "react",
                            "Description": "description bla bvlbal blb",
                            "LogoUrl": "http://url",
                            "WeekNumber": 3,
                            "DayNumber": 3
                        }
                    ],
                    "day4": [
                        {
                            "id": 14,
                            "Topic": "react",
                            "Description": "description bla bvlbal blb",
                            "LogoUrl": "http://url",
                            "WeekNumber": 3,
                            "DayNumber": 4
                        }
                    ]
                },
                "week5": {
                    "day1": [
                        {
                            "id": 2,
                            "Topic": "hackathon",
                            "Description": "description bla bvlbal blb",
                            "LogoUrl": "http://url",
                            "WeekNumber": 4,
                            "DayNumber": 1
                        },
                        {
                            "id": 3,
                            "Topic": "hackathon",
                            "Description": "description bla bvlbal blb",
                            "LogoUrl": "http://url",
                            "WeekNumber": 4,
                            "DayNumber": 2
                        }
                    ]
                }
            }
        }
    }

    addLesson(lesson) {

        console.log(lesson.lessonTopic)
        // console.log(this.state.weeks[`week${lesson.lessonWeek}`][`day${lesson.lessonDay}`])
        // console.log(daysInWeek)
        let newWeeks = Object.assign({}, this.state.weeks);
        newWeeks[`week${lesson.WeekNumber}`][`day${lesson.DayNumber}`].push(lesson);
        this.setState({ weeks: newWeeks });

        console.log(this.state)
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