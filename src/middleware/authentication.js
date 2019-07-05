'use strict';

const db = require('../db');

function authenticate(req, res, next) {
  if (req.session.username) {
    next();
  } else {
    res.render('status/forbidden');
  }
}

function parseUser(req, res, next) {
  if (req.session.username === undefined) {
    req.session.username = null;
  } else {
   db.login({username: req.body.username, password: req.body.password})
    .then((validLogin) => {
      console.log(validLogin);
      if (validLogin) {
        req.session.username = req.body.username;
        res.redirect('/');
      } else {
        res.render('status/forbidden');
      }
    });
    
  }
  next();
}

module.exports = {
  authenticate,
  parseUser,
};
