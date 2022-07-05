const httpStatus = require('http-status');

const Error = {
  // 100++ Error from info of the client
  UrlNotFound: {
    errorCode: 100,
    message: 'Request URL not found',
  },

  UserNameInvalid: {
    errorCode: 101,
    message: 'Username is invalid',
  },
  PasswordInvalid: {
    errorCode: 102,
    message: 'Password is invalid',
  },
  UserNotFound: {
    errorCode: 103,
    message: 'User not  found',
  },

  QrInvalid: {
    errorCode: 104,
    message: 'qrCode not valid',
  },

  // 200++ Error from Db
  CastError: {
    errorCode: 201,
    message: 'Cast field error',
  },
  DuplicateFieldError: {
    errorCode: 202,
    message: 'Duplicate field error',
  },

  // 300++ Error from Third Party

  // 400++ Error from Internal Server
  GenericError: {
    statusCode: httpStatus.INTERNAL_SERVER_ERROR,
    errorCode: 400,
    message: 'Something wrong happened.',
  },
};

module.exports = Error;
