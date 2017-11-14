import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Quote from "./Quote";
import './teacherHome.css';

class TeacherHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: "Its not the altitude, its the attitude",
            username: "Dan",
            authorization: "student",    
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
        <div className="sh-wrapper">
            <br/>
            <div className="row">
                <h1 className="sh-hello">HELLO, {this.state.username.toLocaleUpperCase()}!</h1>
            </div>
            <br/>
            <br/>
            <div className="row sh-quote-wrapper">
                <Quote quote={this.state.quote} />
            </div>
           
       
        

        

        </div>
        )
    }

}

export default TeacherHome;