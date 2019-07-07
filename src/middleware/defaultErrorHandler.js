'use strict';

/**
 * Default error handling middleware
 * @see https://expressjs.com/en/guide/error-handling.html#the-default-error-handler
 */
module.exports = function defaultErrorHandlerMiddleware(error, req, res, next) {
  console.error(error);

  if (res.headersSend) {
    next(error);
  } else {
    res
      .status(500)
      .render('status/error');
  }
};
