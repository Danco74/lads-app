import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Quote from "../common/Quote";
import './TeacherHome.css';
import StudentsView from './StudentsView.js'
import axios from 'axios'

class TeacherHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: this.props.user,
            students: []
        }

    }

    componentWillMount() {
        let that = this;
        axios
        .get('api/students')
        .then(function (response) {
            if (response.data) {
                that.setState({ students: response.data });
            }

        });
    }

    render() {

        let studentView;
        if (this.state.students.length > 0) {
            studentView = <StudentsView students={this.state.students}/>;
        }
        else{
            studentView = "";
        }

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
                <div className="row th-sv-wrapper">
                    {studentView}
                </div>
            </div>
        )
    }

}

export default TeacherHome;