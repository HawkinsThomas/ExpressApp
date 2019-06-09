'use strict';

const express = require('express');
const db = require('./db');

const router = express.Router();

router.post('/register', (req, res, next) => {
  console.log("someone is trying to register");
  db.register(req.body);
  res.sendStatus(200)
    .next();
});

router.post('/login', (req, res, next) => {
  res.sendStatus(200)
    .next();
});

router.get('/product', (req, res, next) => {
  res.sendStatus(200)
    .next();
});

router.get('/product/:id', (req, res, next) => {
  res.sendStatus(200)
    .next();
});

router.post('/product', (req, res, next) => {
  db.createProduct(req.body);
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

module.exports = router;