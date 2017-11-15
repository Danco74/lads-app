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
            pinned: [{
                id: 1,
                logo:'https://docs.microsoft.com/en-us/mobile-center/media/logo_react.svg',
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
                logo:'https://pluralsight.imgix.net/paths/path-icons/angular-14a0f6532f.png',
                completion: 20,
                comfort_rating: 4,
                dayNumber: 1,
                weekNumber: 1,
                pinned:true
            },
            {
                id: 4,
                Topic: "CSS",
                logo:'http://www.010pixel.com/wp-content/uploads/2012/12/CSS3_Logo.png',
                completion: 40,
                comfort_rating: 3,
                dayNumber: 2,
                weekNumber: 3,
                pinned:true
            }],
            weekNumber: 2,
            lessonsInProgress: [
                {
                    id: 1,
                    Topic: "react",
                    logo:'https://docs.microsoft.com/en-us/mobile-center/media/logo_react.svg',
                    completion: 10,
                    comfort_rating: 1,
                    dayNumber: 1,
                    weekNumber: 1,
                    pinned:true
                },
                {
                    id: 2,
                    Topic: "angular",
                    logo:'https://pluralsight.imgix.net/paths/path-icons/angular-14a0f6532f.png',
                    completion: 20,
                    comfort_rating: 4,
                    dayNumber: 1,
                    weekNumber: 1,
                    pinned:true
                },
                {
                    id:3,
                    Topic: "jquery",
                    logo:'http://downloadicons.net/sites/default/files/jquery-icons-17842.png',
                    completion: 30,
                    comfort_rating: 5,
                    dayNumber: 2,
                    weekNumber: 2,
                    pinned:false
                },
                {
                    id: 4,
                    Topic: "CSS",
                    logo:'http://www.010pixel.com/wp-content/uploads/2012/12/CSS3_Logo.png',
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
         
            <div className="row">
                <h1 className="sh-hello">HELLO, {this.state.username.toLocaleUpperCase()}!</h1>
                
            </div>
            
            <div className="row sh-quote-wrapper">
                <Quote quote={this.state.quote} />
            </div>
           
       
            <div className = "row sh-header">
                LESSONS IN PROGRESS
            </div>

            <div className="row">
                <Progress  inProgress={this.state.lessonsInProgress} />
            </div>

            <div className = "row sh-header">
                PINNED LESSONS
            </div>
            <div className="row">
                <PinnedLessons  pinned={this.state.pinned}  />
            </div>

        </div>
        )
    }

}

export default Home;