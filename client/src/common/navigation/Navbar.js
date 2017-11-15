import React, { Component } from 'react';
import './navbar.css'



class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        }
    }

    render() {
    return (

        <div className ="row nav-wrapper">
            <div id="logo" className="columns col-xs-2">
                <a href="#" className="navbar-lads">LADS</a>
            </div>
            <div id="settings" className="columns col-xs-10">
                <a href="#" className="navbar-user">Settings <i className="fa fa-cog fa-lg" aria-hidden="true"/> </a>
                <a href="#" className="navbar-user"><b>{this.state.user.Username} <i className="fa fa-user" aria-hidden="true"></i></b></a>
            </div>
        </div>
    )
}
}



export default Navbar;