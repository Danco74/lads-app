import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Quote from "../common/Quote";
import './teacherHome.css';

class TeacherHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: "Its not the altitude, its the attitude",
            user: this.props.user,
            authorization: "student"
        }

        console.log(props);
    }

    componentWillMount() {

        // this.state.lessons.forEach((lesson) => {     if (lesson.completion < 100) {
        //       this.setState((prevState) => { return { inProgress:
        // prevState.inProgress.concat(lesson) } })     } })
    }

    render() {
        return (

            <div className="sh-wrapper col-xs-offset-1">
                <br/>
                <br/>
                <div className="row">
                    <h1 className="sh-hello">HELLO, {this.state.user.FirstName.toLocaleUpperCase()}!</h1>
                </div>
                <br/>
                <br/>
                <div className="row sh-quote-wrapper">
                    <Quote quote={this.state.quote} user={this.props.user}/>
                </div>
            </div>
        )
    }

}

export default TeacherHome;