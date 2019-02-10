const mongoose = require('mongoose');

// Defining the tweet schema
const TweetSchema = new mongoose.Schema({
    author: String,
    content: String,
    likes: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Making the mongoose schema visible to who import this file
// The module is exporting the TweetSchema with the name Tweet
module.exports = mongoose.model('Tweet', TweetSchema);