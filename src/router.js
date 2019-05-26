'use strict';

const express = require('express');
const db = require('./db');

const router = express.Router();

router.post('/register', (req, res, next) => {
  const newUser = {
    userID: req.body.id,
    passwordHash: req.body.hash,
  };
  //write new user to db asyncronously
  //.then response.status(200)
  //.catch
});

router.post('/login', (res, req, next) => {
  //TODO
})