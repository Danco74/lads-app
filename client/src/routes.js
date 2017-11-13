import React from 'react';
import MainApp from './';
import Page404 from './common/404';
import Login from './components/login/Login.js'
import Lessons from './components/teacher/lessons/lessons'
import Lesson from './components/teacher/lesson/lesson'
import Home from './common/Home'
import {Switch, Route, Redirect} from 'react-router-dom';

const axios = require('axios');

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: "false",
      wasServerQueried: false,
      roleId: -1
      
    }

    this.isLoggedIn = this
      .isLoggedIn
      .bind(this);

  }

  componentWillMount() {
    
    var that = this;

    axios
      .get('http://localhost:3000/user/validate')
      .then(function (response) {
        if (response.data) {
          that.setState({isLoggedIn: true, wasServerQueried: true, roleId: response.data.roleId});
        } else {
          that.setState({isLoggedIn: false, wasServerQueried: true});
        }

      });
  }

  isLoggedIn() {
    return this.state.isLoggedIn;
  }

  render() {

    if (this.state.wasServerQueried) {
      return (
        <div className="container">
          <Switch>

            <Route
              exact
              path="/"
              render={() => (!this.isLoggedIn()
              ? (<Redirect to="/login"/>)
              : (<Home/>))}/>

            <Route
              exact
              path="/lessons"
              render={() => (!this.isLoggedIn()
              ? (<Redirect to="/login"/>)
              : (<Lessons/>))}/>

            <Route exact path="/login" component={Login}/>
            <Route path="*" component={Page404}/>

          </Switch>
        </div>
      );
    }
    else {
      return (
        <div className="container">
          </div>
      )
    }
  }
}

export default Routes;
