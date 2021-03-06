import React from 'react';
import Page404 from './common/404';
import Login from './common/login/Login.js';
import Lesson from './components/lesson/lesson.js';
import Navwrapper from './common/navigation/Navwrapper';
import { HashRouter, Router,Route, Redirect } from 'react-router-dom';

const axios = require('axios');

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: "false",
      wasServerQueried: false,
      user : ""

    }

    this.isLoggedIn = this
      .isLoggedIn
      .bind(this);

  }

  componentWillMount() {

    var that = this;
 

    axios
      .get('/user/validate')
      .then(function (response) {
        if (response.data) {
          that.setState({ isLoggedIn: true, wasServerQueried: true, user: response.data });
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


    <HashRouter>
          <Route path="/login" component={Login}/>
    </HashRouter>

  
  <HashRouter>
          <Route exact path="/"
               render={() => (!this.isLoggedIn()
                 ? (<Login />)
                 : (<Redirect to="/lads" />))} />

      
   
          {/* <Route path="*" component={Page404} /> */}
      </HashRouter>

      <HashRouter>
     
          <Route path="/lads" 
               render={(props) => (!this.isLoggedIn()
                 ? (<Login />)
                 : (<Navwrapper  user={this.state.user} newprops={props}/>))} /> 

   
        
      </HashRouter>

    

      <HashRouter>
     
          <Route path="/lesson"
               render={() => (!this.isLoggedIn()
                 ? (<Login />)
                 : (<Lesson/>))} /> 

   
        
      </HashRouter>

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
