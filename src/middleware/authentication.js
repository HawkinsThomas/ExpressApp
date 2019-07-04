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
  } else if (req.body.username === process.env.USERNAME
      && req.body.password === process.env.PASSWORD) {
    req.session.username = req.body.username;
    res.redirect('/');
  }
  next();
}

module.exports = {
  authenticate,
  parseUser,
};
