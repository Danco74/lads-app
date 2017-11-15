import React from 'react';
import ReactDom from 'react-dom';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import Navwrapper from './common/navigation/Navwrapper'
import Login from './common/login/Login.js'
import { Link, Route } from 'react-router-dom';

class AppWrapper extends React.Component {
  render() {
    
    const { props } = this;
    return (

      <BrowserRouter>

      <div>
      <Routes />
    
        </div>

      </BrowserRouter>

    );
  }
}

ReactDom.render(
  <AppWrapper />, document.getElementById('react-app'));
