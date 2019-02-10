# Running the app

`yarn install` install the dependecies from this project

`yarn star` start the server

# Endpoint

The server is going to be running in the `http://localhost:3000`, it has the `tweets` and 
`likes` endpoints

### tweets

Tweets endpoint has two methods, `get` that show all tweets saved in the DB and `post` that save a new tweet in the DB.

### likes

Likes endpoint has only one method `get`, and the ID of the tweet need to be passed in the URL like the example below

`http://localhost:3000/likes/<ID-HERE>`