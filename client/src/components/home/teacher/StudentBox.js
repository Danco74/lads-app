import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Quote from "../common/Quote";
import './TeacherHome.css';
import './StudentBox.css';

class StudentBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName : props.student.FirstName,
            lastName : props.student.LastName,
            username : props.student.Username,
            progress : props.student.Progress
        }
    }

    componentWillMount() {

        
    }

    render() {
        return (

            <div className={`sb-wrapper sb-color-${Math.floor(this.state.progress/10)}`}>
                <i className="fa fa-user" aria-hidden="true"></i>
                <br/>
                {this.state.firstName}
            </div>
        )
    }

}

export default StudentBox;