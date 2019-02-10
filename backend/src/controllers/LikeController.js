const Tweet = require('../models/Tweet');

module.exports = {
    async store(req, res) {
        const tweet = await Tweet.findById(req.params.id);

        tweet.set({ likes: tweet.likes + 1 });

        await tweet.save();

        // The same logic that was applied saving a new tweet is applied here
        req.io.emit('like', tweet);

        return res.json(tweet);
    }
};