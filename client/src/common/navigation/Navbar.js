import React, { Component } from 'react';


function Navbar(props) {
    return (
        <div className ="row">
            <div id="logo" className="columns col-xs-2">
                <a href="#" className="navbar-lads">LADS</a>
            </div>
            <div id="settings" className="columns col-xs-10">
                <a href="#" className="navbar-user">Settings <i className="fa fa-cog fa-lg" aria-hidden="true"/> </a>
                <a href="#" className="navbar-user">Dan Cohen</a>
            </div>
        </div>
    )
}



export default Navbar;