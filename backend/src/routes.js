const express = require('express');
const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');

const routes = express.Router();

// routes.get('/', (req, res) => {
//     return res.send('Hello world!!');
// });

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);

routes.post('/likes/:id', LikeController.store);

// Exporting the routes
module.exports = routes;