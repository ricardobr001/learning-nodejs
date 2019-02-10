import React, { Component } from 'react';
import './Tweet.css';
import like from '../like.svg';
import api from '../services/api';

export default class Tweet extends Component {
    handleLike = async () => {
        // Recovering the _id from tweet and saving it on variable _id
        const { _id } = this.props.tweet;

        // Using the variable _id in the endpoint
        await api.post(`likes/${_id}`);
    }

    render() {
        // Saving the property passed in the timeline.js on variable tweet
        const { tweet } = this.props;
        return (
            <li className="tweet">
                <strong>{tweet.author}</strong>
                <p>{tweet.content}</p>
                <button type="button" onClick={this.handleLike}>
                    <img src={like} alt="like" />
                    {tweet.likes}
                </button>
            </li>
        );
    }
}
