'use strict';

const express = require('express');
const db = require('./../db');
const productsRoutes = require('./products');

const router = express.Router();

router.get('/', productsRoutes.allProducts);

router.post('/register', (req, res, next) => {
  console.log("someone is trying to register");
  db.register(req.body);
  res.sendStatus(200);
});

router.post('/login', (req, res, next) => {
  db.login(req.body)
    .then((validLogin) => {
      if (validLogin) {
        req.session.username = req.body.username;
        res.redirect('/');
        console.log('youre here cool guy');
      } else {
        res.render('status/forbidden');
      }
  });
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
  res.sendStatus(200);
});

router.put('/product/:id', (req, res, next) => {
  db.updateProduct(req.body);
  res.sendStatus(200);
});

router.delete('/product/:id', (req, res, next) => {
  const { id } = req.params;
  db.deleteProduct(id);
  res.sendStatus(200);
});

module.exports = router;