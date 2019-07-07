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
  console.log(req.session);
  if (req.session.username === undefined || req.session.username === null) {
    req.session.username = null;
  } else {
    console.log(req.session.username);
  };
  next();
};

module.exports = {
  authenticate,
  parseUser,
};
