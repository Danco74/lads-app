import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Progress from "./Progress";
import Quote from "../common/Quote";
import PinnedLessons from "./Pinned";
import './studentHome.css';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: "Its not the altitude, its the attitude",
            username: "Dan",
            authorization: "student",
            inProgress: [],
            weekNumber: 2,
            lessonsInProgress: [
                {
                    id: 1,
                    Topic: "react",
                    completion: 10,
                    comfort_rating: 1,
                    dayNumber: 1,
                    weekNumber: 1,
                    pinned:true
                },
                {
                    id: 2,
                    Topic: "angular",
                    completion: 20,
                    comfort_rating: 4,
                    dayNumber: 1,
                    weekNumber: 1,
                    pinned:true
                },
                {
                    id:3,
                    Topic: "jquery",
                    completion: 30,
                    comfort_rating: 5,
                    dayNumber: 2,
                    weekNumber: 2,
                    pinned:false
                },
                {
                    id: 4,
                    Topic: "CSS",
                    completion: 40,
                    comfort_rating: 3,
                    dayNumber: 2,
                    weekNumber: 3,
                    pinned:true
                }
            ]
        }
    }

    componentWillMount() {



        // this.state.lessons.forEach((lesson) => {

        //     if (lesson.completion < 100) {
        //         this.setState((prevState) => { return { inProgress: prevState.inProgress.concat(lesson) } })
        //     }
        // })
    }

    render() {
        return (
        <div className="sh-wrapper col-xs-offset-1">
            <br/>
            <div className="row">
                <h1 className="sh-hello">HELLO, {this.state.username.toLocaleUpperCase()}!</h1>
            </div>
            <br/>
            <br/>
            <div className="row sh-quote-wrapper">
                <Quote quote={this.state.quote} />
            </div>
           
       
            <div className = "row sh-progress-header">
                LESSONS IN PROGRESS
            </div>

            <div className="row">
                <Progress  inProgress={this.state.lessonsInProgress} />
            </div>

        </div>
        )
    }

}

export default Home;