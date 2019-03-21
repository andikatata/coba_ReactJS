import React, { Component } from 'react';
export default class FormLogin extends Component {
    render() {
        const { username, style } = this.props;
        return (
            <div style={style}>
                <h1>Hello, {username}</h1>
                <br />
                {/* <form>
                <input type='text' name="username"  />
                <input type='password' name='password' />
                <button>Submit</button>
                </form> */}
            </div>
        );
    }
}