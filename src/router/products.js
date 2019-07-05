'use strict';
const db = require('./../db');

function allProducts(req, res, next) {
  if (req.session.username){
    db.getAllProducts()
    .then((products) => {
      res.render('products', {
        name: 'All Products',
        products: products
      });
    });
  } else {
    res
      .status(403)
      .render('status/forbidden');
  }
}

module.exports = { allProducts: allProducts };