import React, {Component} from 'react';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
import PostData from './PostData';
import './csslogin.css';

export default class PostLogin extends Component{
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        };
    }
    handleEmailChange = (evt) => {
        this.setState({ email: evt.target.value });
    }

    handlePasswordChange = (evt) => {
        this.setState({ password: evt.target.value });
    }

    handleSubmit = () => {
        const { email, password } = this.state;
        alert(`Signed up with email: ${email} password: ${password}`);
    }
    render() {
        const { email, password } = this.state;
        const isEnabled = email.length > 0 && password.length > 0;
        return (
            <Router>
                <div>
                    <Route path="/" exact render={
                        () => {
                            return (
                                <form>
                                    <h2><span className="entypo-login"><i className="fa fa-sign-in"></i></span> Login</h2>
                                    <NavLink to="/sign-in"><button disabled={!isEnabled} class="entypo-lock"></button></NavLink>
                                    <span className="entypo-user inputUserIcon"><i className="fa fa-user"></i></span>
                                    <input type="email" className="user" placeholder="username" value={this.state.email} onChange={this.handleEmailChange} />
                                    <span className="entypo-key inputPassIcon"><i className="fa fa-key"></i></span>
                                    <input type="password" className="pass" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
                                    <br />
                                    <br />
                                  </form>
                            );
                        }
                    } />

                    <Route exact path="/sign-in" component={PostData}>
                    </Route>
                </div>
            </Router>
        );
    }
}