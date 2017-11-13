import React, { Component } from 'react';


function Navbar(props) {
    return (
        <div className="navbar-container">
            <a href="#" className="navbar-lads">LADS</a>
            <a href="#" className="navbar-user">Settings</a>
            <a href="#" className="navbar-user"><i className="fa fa-cog fa-lg" aria-hidden="true"></i>Dan Cohen</a>
        </div>
    )
}



export default Navbar;