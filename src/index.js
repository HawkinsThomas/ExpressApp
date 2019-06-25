'use strict';

const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
//const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use('/static', express.static('./static'));
app.use('/css', express.static('./css'));
app.use(bodyParser.json());
app.use(router);

const port = 3000;
app.listen(port, () => {
  console.log('Express server started on port ${port}')
});