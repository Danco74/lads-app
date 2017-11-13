import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Progress from "./Progress";
import Quote from "./Quote";
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
            lessons: [
                {
                    Topic: "react",
                    completion: 10,
                    comfort_rating: 1,
                    dayNumber: 1,
                    pinned:true
                },
                {
                    Topic: "angular",
                    completion: 20,
                    comfort_rating: 4,
                    dayNumber: 1,
                    pinned:true
                },
                {
                    Topic: "jquery",
                    completion: 30,
                    comfort_rating: 5,
                    dayNumber: 2,
                    pinned:false
                },
                {
                    Topic: "CSS",
                    completion: 40,
                    comfort_rating: 3,
                    dayNumber: 2,
                    pinned:true
                },
                {
                    Topic: "Bootstrap",
                    completion: 50,
                    comfort_rating: 2,
                    dayNumber: 5,
                    pinned:false
                },
                {
                    Topic: "Handlebars",
                    completion: 60,
                    comfort_rating: 4,
                    dayNumber: 4,
                    pinned:true
                },
                {
                    Topic: "SQL",
                    completion: 70,
                    comfort_rating: 4,
                    dayNumber: 3,
                    pinned:false
                }
                ,
                {
                    Topic: "DOM",
                    completion: 80,
                    comfort_rating: 4,
                    dayNumber: 3,
                    pinned:true
                }
                ,
                {
                    Topic: "HTML",
                    completion: 90,
                    comfort_rating: 4,
                    dayNumber: 2,
                    pinned:true
                }
            ]
        }
    }

    componentWillMount() {
        this.state.lessons.forEach((lesson) => {

            if (lesson.completion < 100) {
                this.setState((prevState) => { return { inProgress: prevState.inProgress.concat(lesson) } })
            }
        })
    }

    render() {
        return (
        <div>
            <br/>
            <div className="row">
                <h1 className="sh-hello">HELLO, {this.state.username.toLocaleUpperCase()}!</h1>
            </div>
            <br/>
            <br/>
            <div className="row sh-quote-wrapper">
                <Quote quote={this.state.quote} />
            </div>
            <div>
                <h3>Week {this.state.weekNumber}</h3>
                <div className="graphs">
                    <Progress  inProgress={this.state.inProgress} />
                    <PinnedLessons  lessons={this.state.lessons}/>
                    
                </div>
            </div>
        </div>
        )
    }

}

export default Home;