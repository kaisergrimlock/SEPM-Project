const httpStatus = require('http-status');
const AppError = require('./AppError');
const Success = require('./Success');

const newError = (errCode, errorMessage, statusCode = httpStatus.BAD_REQUEST) => {
  return new AppError(errCode, errorMessage, statusCode);
};

const newSucess = (respBody = {}, message = 'Successfully', code = 0, statusCode = httpStatus.OK) => {
  return new Success(respBody, message, code, statusCode);
};

module.exports = { newSucess, newError };
