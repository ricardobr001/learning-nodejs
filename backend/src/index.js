const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

// The server need to be created after the app, to pass the app to server
const server = require('http').Server(app);
const io = require('socket.io')(server);

// Connecting to the database
mongoose.connect('mongodb://goweek:goweek123@ds155150.mlab.com:55150/goweek-backend',
    {
        useNewUrlParser: true
    }
);

// Making the io accessible in all the application, like in the controllers, where we want to use it
app.use((req, res, next) => {
    req.io = io; // adding the io to the req obj

    return next(); // now, go treat the route
});

// Enabling CORS in our application
app.use(cors());

// Informing that the requisitions are coming in JSON format
app.use(express.json());

// Using the routes defined in the file routes.js
app.use(routes)

// req -- requisition data
// res -- answer from server
/* app.get('/', (req, res) => {
    return res.send('Hello world!');
}); */

// Listening in the 3000 port
// () -- callback function
/* app.listen(3000, () => {
    console.log('Server started on port 3000.');
}); */

// We need to use the server we've created, to enable the use of the protocol WS (WebSocket)
// Now the server is going to notify all the frontend apps connected to our backend
server.listen(3000, () => {
    console.log('Server started on port 3000.');
});