import React, { Component } from 'react';
import { Switch, Route, LinkProps, Link } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import StudentHome from '../../components/home/student/StudentHome'
import TeacherHome from '../../components/home/teacher/TeacherHome'
import Lessons from '../../components/lessons/lessons'
import Lesson from '../../components/lesson/lesson'
import './navwrapper.css'

class Navwrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authorization: props.authorization
        }
    }




    render() {

        const { props } = this;

        const RouteName = ({ match }) => {
            switch (match.params.routeName) {
                case 'home':
                    if (this.state.authorization === 1) {
                        return <StudentHome />
                    }
                    else if (this.state.authorization === 0) {
                        return <TeacherHome />
                    }
                case 'lessons':
                    return <Lessons />
                case 'lesson':
                    return <Lesson />
            }
        }



        return (
            <div className="">
                <Navbar />

                <div className="row">
                    <div className="col-xs-2" id="sidebarBox">

                        <Sidebar sideprops={this.props.newprops} />

                    </div>
                    <div className="col-xs-10">
                        <Route path={`${props.newprops.match.path}/:routeName`} component={RouteName} />

                    </div>

                </div>

            </div>
        )
    }
}
export default Navwrapper;

