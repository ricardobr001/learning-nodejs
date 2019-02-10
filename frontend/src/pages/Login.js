import React, { Component } from 'react';
import './Login.css';
import twitterlogo from '../twitter.svg'

export default class Login extends Component {
    // Saving the username in state variable
    state = {
        username: ''
    };

    // When the form is submitted we're going to handle it
    handleSubmit = e => {
        e.preventDefault(); // Avoing any behaviour from our form

        const { username } = this.state;

        // Username must have length greater than 0
        if (!username.length) {
            return;
        }

        // Saving the user on browser storage
        localStorage.setItem('@GoTwitter:username', username);

        // Redirecting the user to the timeline
        this.props.history.push('/timeline');
    }

    // The function receives an event e, which contains the value from input
    handleInputChange = e => {
        // We always use the function setState to save any information on the state variable
        // Can't user this.state.username = 'some name', THIS IS WRONG
        this.setState({ username: e.target.value });
    }

    render() {
        return (
            <div className="login-wrapper">
                <img src={twitterlogo} alt="GoTwitter" />
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        placeholder="Nome de usuário"
                    />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        );
    }
}
