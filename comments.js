// create web server
// create web app
// create a route
// create a handler
// send back a response

// 1. require express
const express = require('express');

// 2. create an instance of express
const app = express();

// 3. create a route
// 4. create a handler
// 5. send back a response
app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/comments', (req, res) => {
  res.send('hello comments');
});

// 6. start the server
app.listen(3000, () => {
  console.log('server is listening on port 3000');
});
