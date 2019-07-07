'use strict';

const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const session = require('express-session');
const defaultErrorHandler = require('./middleware/defaultErrorHandler.js')
const authenticate = require('./middleware/authentication.js');
require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');
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
app.use('/static', express.static('./static'));
app.use('/css', express.static('./css'));

app.use(authenticate.parseUser);


app.use(router);

app.use(defaultErrorHandler);

const port = process.env.HTTP_PORT;
app.listen(port, () => {
  console.log(`Express server started on port ${port}`)
});