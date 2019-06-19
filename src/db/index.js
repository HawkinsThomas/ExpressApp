const fs = require('fs');
const util = require('util');
const path = require('path');

let readFile = util.promisify(fs.readFile);
//let writeFile = util.promisify(fs.writeFile);

const productsPath = path.resolve('./src/db/product.json');

const register = (newUser) => {
  fs.readFile('./src/db/users.json', 'utf8', (err, data) => {
    if (err) throw err;
    else {
      const users = JSON.parse(data);
      if (users[Object.keys(newUser)[0]]){
        console.log("user already exists");
        return
      }
      updatedUsers = {...users, ...newUser};
      fs.writeFile('./src/db/users.json', JSON.stringify(updatedUsers, null, 2), 'utf8', (err) => {
        if (err) throw err;
      });
    }
  });
};

const createProduct = (newProduct) => {
  fs.readFile('./src/db/product.json', 'utf8', (err, data) => {
    if (err) throw err;
    else {
      const products = JSON.parse(data);
      if (products[Object.keys(newProduct)[0]]){
        console.log('product already exists');
        return;
      }
      updatedProducts = {...products, ...newProduct};
      fs.writeFile('./src/db/product.json', JSON.stringify(updatedProducts, null, 2), 'utf8', (err) => {
        if (err) throw err;
      });
    }
  });
};

const deleteProduct = (product) => {
  fs.readFile('./src/db/product.json', 'utf8', (err, data) => {
    if (err) throw err;
    else {
      const products = JSON.parse(data);
      if (!(products[product])){
        console.log('product does not exist');
        return;
      }
      delete products[product];
      fs.writeFile('./src/db/product.json', JSON.stringify(products, null, 2), 'utf8', (err) => {
        if (err) throw err;
      });
    }
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
}
