const Tweet = require('../models/Tweet');

// Exporting the object with the methods that's going to be executed
module.exports = {
    // async function
    // recovering all tweets saved in the DB
    async index(req, res) {
        const tweets = await Tweet.find({}) // finding all the tweets {}, no parameters
            .sort('-createdAt'); // ordening them by createdAt attribute in the inverted order
        
        return res.json(tweets);
    },

    // saving in the DB
    async store(req, res) {
        const tweet = await Tweet.create(req.body);

        // Everyone who is connected to our application, are going to be notified that
        // a new tweet has been written
        // The name of the event is tweet, and the object that is going to be sent is the new tweet
        req.io.emit('tweet', tweet);
        return res.json(tweet);
    }
};