require('dotenv').config();
const express = require('express');
const cors = require('cors');
const auth = require('./middleware/auth.js');
const routes = require('./routes');
// const db = require('../db/client.js');
const app = express();
const campusAPI = 'api/fec2/hr-rfc';
const cache = require('./cache.js');
const appId = process.env.APP_ID;

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send(`appid: ' ${appId} home page: says hello!`);
});

app.get('/attelier-server1', (req, res) => {
  res.send(`appid: ' ${appId} app1 page: says hello!`);
});

app.get('/attelier-server2', (req, res) => {
  res.send(`appid: ' ${appId} app2 page: says hello!`);
});

app.get('/loaderio-eae136dd98e413d38d172053a20f0383.txt', (req, res) => {
  res.send('loaderio-eae136dd98e413d38d172053a20f0383');
});

// // Authorization
// app.use(auth);
app.use(cache(3000));

// // Routes
app.use(routes);

const PORT = process.env.PORT | 8080;

app.listen(appId, () => {
  console.log('Server is successfully running on port ' + PORT);
});