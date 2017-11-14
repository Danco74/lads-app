import React from 'react';
import Page404 from './common/404';
import Login from './common/login/Login.js'
import Lessons from './components/student/lessons/lessons'
import Navwrapper from './common/navigation/Navwrapper'
import { Switch, Route, Redirect } from 'react-router-dom';

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
    console.log(props)
  }

  componentWillMount() {

    var that = this;
    console.log(that)

    axios
      .get('http://localhost:3000/user/validate')
      .then(function (response) {
        if (response.data) {
          that.setState({ isLoggedIn: true, wasServerQueried: true, roleId: response.data.roleId });
        } else {
          that.setState({ isLoggedIn: false, wasServerQueried: true });
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
          {/* <Switch> */}
          {/* <Route exact path="/" component={Login} /> */}
          <Route exact path="/"
               render={() => (!this.isLoggedIn()
                 ? (<Login />)
                 : (<Redirect to="/lads" />))} />


          {/* <Route path="/lads" component={Navwrapper} /> */}
          <Route path="/lads"
               render={(props) => (!this.isLoggedIn()
                 ? (<Login />)
                 : (<Navwrapper newprops={props}/>))} /> 

           
             {/* <Route exact path="/lessons"
               render={() => (!this.isLoggedIn()
                 ? (<Redirect to="/login" />) : (<Lessons />))} /> */}

          {/* <Route exact path="/login" component={Login}/> */}
          <Route path="*" component={Page404} />

          {/* </Switch> */}
        </div>
      );
    }
    else {
      return (
        <div>
        </div>
      )
    }
  }
}

export default Routes;
