'use strict';

function parseUser(req, res, next) {
  if (req.session.username === undefined || req.session.username === null) {
    req.session.username = null;
  } else {
    console.log(`${req.session.username}\'s session is active`)
  }
  next();
};

module.exports = {
  parseUser,
};
