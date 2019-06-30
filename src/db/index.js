'use strict';

const fs = require('fs');
const util = require('util');
const path = require('path');
const bcrypt = require('bcrypt');

const readFile = util.promisify(fs.readFile);
//let writeFile = util.promisify(fs.writeFile);

const productsPath = path.resolve('./src/db/product.json');
const usersPath = path.resolve('./src/db/users.json');

const register = (newUser) => {
  readFile(usersPath)
    .then((data) => {
      const users = JSON.parse(data);
      const newUsername = Object.keys(newUser)[0];
      const newPass = newUser[newUsername].password;
      if (users[newUsername]){
        console.log("user already exists");
        return
      }
      console.log(newPass);
      bcrypt.hash(newPass, 10, function(err, hash){
          if (err) throw err;
        const hashedUser = {...newUser, ...{[newUsername]: {'password': hash}}};
        const updatedUsers = {...users, ...hashedUser};
        fs.writeFile(usersPath, JSON.stringify(updatedUsers, null, 2), 'utf8', (err) => {
          if (err) throw err;
        });
      });
  });
};

const createProduct = (newProduct) => {
  readFile(productsPath)
    .then((data) => {
      const products = JSON.parse(data);
      if (products[Object.keys(newProduct)[0]]){
        console.log('product already exists');
        return;
      }
      updatedProducts = {...products, ...newProduct};
      fs.writeFile(productsPath, JSON.stringify(updatedProducts, null, 2), 'utf8', (err) => {
        if (err) throw err;
      });
  });
}

const updateProduct = (newProduct) => {
  readFile(productsPath)
    .then((data) => {
      const products = JSON.parse(data);
      if (!(products[Object.keys(newProduct)[0]])){
        console.log('product does not exist ');
        return;
      }
      updatedProducts = {...products, ...newProduct};
      fs.writeFile(productsPath, JSON.stringify(updatedProducts, null, 2), 'utf8', (err) => {
        if (err) throw err;
      });
  });
};

const deleteProduct = (product) => {
  readFile(productsPath)
    .then((data) => {
      const products = JSON.parse(data);
      if (!(products[product])){
        console.log('product does not exist');
        return;
      }
      delete products[product];
      fs.writeFile(productsPath, JSON.stringify(products, null, 2), 'utf8', (err) => {
        if (err) throw err;
      });
  });
}

function getAllProducts() {
  return readFile(productsPath)
    .then((json) => {
      return JSON.parse(json);
    });
};

module.exports = {
  register: register,
  createProduct: createProduct,
  getAllProducts: getAllProducts,
  deleteProduct: deleteProduct,
  updateProduct: updateProduct,
}
