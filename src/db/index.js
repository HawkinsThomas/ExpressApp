const fs = require('fs');

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
        console.log("product already exists");
        return
      }
      updatedProducts = {...products, ...newProduct};
      fs.writeFile('./src/db/product.json', JSON.stringify(updatedProducts, null, 2), 'utf8', (err) => {
        if (err) throw err;
      });
    }
  });
};

module.exports.register = register;
module.exports.createProduct = createProduct;