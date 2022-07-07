// Middlewares will handle different authentication, authorization and validation
const globalErrorHandler = require('./globalErrorHandler');
const verifyJwt = require('./verifyJwt');

module.exports = {
  globalErrorHandler,
  verifyJwt,
};
