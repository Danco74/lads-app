import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Quote from "../common/Quote";
import './TeacherHome.css';
import './StudentView.css';
import StudentBox from './StudentBox'

class StudentsView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students : props.students
        }
    }

    componentWillMount() {}

    render() {

        let renderStudentBoxes = () => {
            return this.state.students.map((student, index) => (<StudentBox student = {student} key={index}/>))
        }

        return (
        <div className="sv-wrapper">
            {renderStudentBoxes()}
        </div>
        )
    }

}

export default StudentsView;