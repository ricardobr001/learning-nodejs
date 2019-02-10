import React, { Component } from 'react';
import socket from 'socket.io-client';
import api from '../services/api';
import './Timeline.css';
import twitterlogo from '../twitter.svg';
import Tweet from '../components/Tweet';

export default class Timeline extends Component {
    state = {
        tweets: [],
        newTweet: ''
    };

    // Function that is called when the view is shown
    async componentDidMount() {
        this.subscribeToEvents();
        const response = await api.get('tweets');

        this.setState({ tweets: response.data });
    }

    subscribeToEvents = () => {
        const io = socket('http://localhost:3000');

        io.on('tweet', data => {
            // Setting the new tweet inserted in the DB in the first position and copying
            // The others tweets after the first tweet
            this.setState({ tweets: [data, ... this.state.tweets] })
        });

        io.on('like', data => {
            this.setState({
                // Checking if the id from the tweet in the array is the same from the tweet that have a new like
                // If it's the same, override this tweet with the new tweet (data)
                // Otherwise, maintain the same tweet
                tweets: this.state.tweets.map(tweet =>
                    tweet._id === data._id ? data : tweet
                )
            });
        });
    }

    handleNewTweet = async e => {
        // Checking if the user has pressed enter
        if (e.keyCode !== 13) {
            return;
        }

        const content = this.state.newTweet;
        const author = localStorage.getItem('@GoTwitter:username');

        // Calling our service to save the new tweet in the DB
        await api.post('tweets', { content, author });

        this.setState({ newTweet: '' });
    }

    handleInputChange = e => {
        this.setState({ newTweet: e.target.value })
    }

    render() {
        return (
            <div className="timeline-wrapper">
                <img src={twitterlogo} height={24} alt="GoTwitter" />
                <form>
                    <textarea
                        value={this.state.newTweet}
                        onChange={this.handleInputChange}
                        onKeyDown={this.handleNewTweet}
                        placeholder="O que está acontecendo?"
                    />
                </form>
                <ul className="tweet-list">
                    {this.state.tweets.map(tweet =>
                        <Tweet key={tweet._id} tweet={tweet} />
                    )}
                </ul>
            </div>
        );
    }
}
