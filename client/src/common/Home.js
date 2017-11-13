import React, { Component } from 'react';

// import Background from './background.jpg' 


class Home extends Component {


  render() {
    return (
      <div>
          <h1> HELLO WORLD </h1>
          <Route exact path="/lesson" component={Lesson} />
      </div>
    )
  }
}




export default Home;
