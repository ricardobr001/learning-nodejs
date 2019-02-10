# Application

The application that has been developed, is a minimalist replica from twitter.

We save new tweets, like some tweets saved in the DB.

# Backend

Learning to use the `express` framework in the backend with `socket.io` to notify the front-end app
that a new tweet has been inserted in the DB and any of them have a new like.

Using the `mongoose` to talk with MongoDB, that has been created in the [mlab](https://mlab.com)

Also used the `nodemon` to start our server and listen to changes in our back-end, updating the app always in any change, without needing to restarting the server after any changes.