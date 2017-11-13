import React from 'react';
import ReactDom from 'react-dom';
import Routes from './Routes';
import Sidebar from './navigation/Sidebar'
import Navbar from './navigation/Navbar'
import {BrowserRouter} from 'react-router-dom';
import './style.css'
// import 'bootstrap/dist/css/bootstrap.css';
// import 'font-awesome/css/font-awesome.css';


class AppWrapper extends React.Component {
  render() {
    return (
      <div>
      <Sidebar/>
      <Navbar/>
      
      <BrowserRouter>
  
            <Routes/>
    
      </BrowserRouter>
      </div>

    );
  }
}

ReactDom.render(
  <AppWrapper/>, document.getElementById('react-app'));
