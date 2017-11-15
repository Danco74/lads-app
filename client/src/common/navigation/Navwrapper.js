import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
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
            user: props.user
        }   
    }



    render() {
        const { props } = this;
        const RouteName = ({ match }) => {
            switch (match.params.routeName) {
                
                case 'home':
                console.log(match)
                if (this.state.user.RoleId === 0){
                    return <StudentHome user={this.state.user}/>
                }
                else if (this.state.user.RoleId === 1) {
                    return <TeacherHome user={this.state.user}/>
                }
                case 'lessons':
                    return <Lessons user={this.state.user} match={match}/>

                // case 'lesson':
                //     return <Lesson user={this.state.user}/>
            }
        }


        return (
            <div className="">
                <Navbar  user={this.state.user}/>

                <div className="row">
                    <div className="col-xs-2" id="sidebarBox">

                        <Sidebar sideprops={this.props.newprops} />

                    </div>
                    <div className="col-xs-10">


                        <Route exact path='/lads' render={(props)=>(this.state.user.RoleId === 0 
                            ? (<StudentHome user={this.state.user}/>) 
                            : (<TeacherHome user={this.state.user}/>))} />


                        <Route path="/lads/lesson/:id" component={Lesson} />
                        <Route path={`${props.newprops.match.path}/:routeName`} component={RouteName} />
                       

                    </div>

                </div>

            </div>
        )
    }
}
export default Navwrapper;

