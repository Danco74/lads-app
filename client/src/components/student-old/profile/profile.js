import React, {Component} from 'react'
import '../style.css'
import {Route, Link} from 'react-router-dom'
import Lessons from '../lessons/lessons'

class Profile extends Component{
    render(){
        return (
            <div>
            <h1 className="test">Lesson {this.props.number}</h1>
            {/* <Link to='/lessons'>Back To Lessons</Link>
            <Route exact path='/lessons' component={Lessons}/> */}
            </div>

        )
    }
}

export default Profile