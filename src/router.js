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

router.get('/product', async (req, res, next) => {
  db.getAllProducts()
    .then((allProducts) => {
      res.json(allProducts);
    });
});

router.get('/product/:id', (req, res, next) => {
  const { id } = req.params;
  console.log(id)
  db.getAllProducts()
    .then((allProducts) => {
      res.json({ [id]: allProducts[id] });
    })
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