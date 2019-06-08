'use strict';

const express = require('express');
const db = require('./db');

const router = express.Router();

router.post('/register', (req, res, next) => {
  res.sendStatus(200)
    .next();
  //const newUser = {
  //  userID: req.body.id,
  //  passwordHash: req.body.hash,
  //};
  //write new user to db asyncronously
  //.then response.status(200)
  //.catch
});

router.post('/login', (req, res, next) => {
  res.sendStatus(200)
    .next();
});

router.post('/register', (req, res, next) => {
  res.sendStatus(200)
    .next();
})

router.get('/product', (req, res, next) => {
  res.sendStatus(200)
    .next();
});

router.get('/product/:id', (req, res, next) => {
  res.sendStatus(200)
    .next();
});

router.post('/product', (req, res, next) => {
  res.sendStatus(200)
    .next();
});

router.put('/product/:id', (req, res, next) => {
  res.sendStatus(200)
    .next();
});

router.delete('/product/:id', (req, res, next) => {
  res.sendStatus(200)
    .next();
});