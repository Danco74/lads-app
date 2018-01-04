import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class LoginForm extends Component {


    render() {
        return (
            <div className="loginForm">
                <h1 className="head-login">Login</h1>
                <form className="form-login" method="post" action="./api/login">
                    <div className="form-group">
                        <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>
                        <input type="text" name="username" className="form-control" id="email" placeholder="E-Mail Address" />
                    </div>
                    <div className="form-group">
                        <i className="fa fa-lock fa-2x" aria-hidden="true"></i>
                        <input type="password" name="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <div className="btn-submit-div">
                    <button type="submit" className="btn btn-info btn-submit">Login </button>
                   
                    </div>
                    <div className="otherConnections">
                    <p>or connect with</p>
                    <div>
                    <i className="fa fa-linkedin-square fa-2x icons" aria-hidden="true"></i>
                    <i className="fa fa-facebook-square fa-2x icons" aria-hidden="true"></i>
                    <i className="fa fa-google-plus-square fa-2x icons" aria-hidden="true"></i>
                    <i className="fa fa-github-square fa-2x icons" aria-hidden="true"></i>
                    </div>
                    <p className="version">Version: 1.06.03</p>
                    </div>
                </form>
            </div>
        )
    }
}



export default LoginForm;
