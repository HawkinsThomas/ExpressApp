'use strict';

const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const session = require('express-session');
const authenticate = require('./middleware/authentication.js');
//const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use('/static', express.static('./static'));
app.use('/css', express.static('./css'));
app.use(bodyParser.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie:
  {
    secure: false,
    maxAge: 7200000,
    httpOnly: true,
  },
}));

app.use(authenticate.parseUser);

app.use(router);

const port = 3000;
app.listen(port, () => {
  console.log('Express server started on port ${port}')
});