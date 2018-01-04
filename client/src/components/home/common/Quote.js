
import React, { Component } from 'react';
import './quote.css';
import axios from 'axios';
//this component displays the message of the day from the teacher

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            quote: ""
        }

        this.updateQuote = this.updateQuote.bind(this);

    }

    componentWillMount() {
        var that = this;
        axios
        .get('./api/lessons/misc/quote')
        .then(function (response) {

          if (response.data) {
            that.setState({ quote: response.data[0].Text});
          } else {
            that.setState({ quote: ""});
          }
  
        });
    }


    updateQuote(e){
     var that = this;
        axios
        .put('./api/lessons/misc/quote',{text: e.target.textContent})
        .then(function (response) {
            console.log("POST QUOTE---> " + response);
          if (response.data) {
              console.log("saved to db");
            // that.setState({ quote: e.target.value});
          } else {
            // that.setState({ quote: ""});
          }
  
        });
    }

    render() {



        var isEditable = "false";
        if (this.props.user.RoleId == 1) {
            isEditable = true;
        }

        return (
        
          
            <div className="daily-quote" onBlur={this.updateQuote} contentEditable={isEditable}> <i className="fa fa-quote-left" aria-hidden="true" />{this.state.quote.toUpperCase()}<i className="fa fa-quote-right" aria-hidden="true" /></div>
        
        )
    }

}

export default Quote;