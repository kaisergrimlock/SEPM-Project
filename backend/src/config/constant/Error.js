const httpStatus = require('http-status');

const Error = {
  // 100++ Error from info of the client
  UrlNotFound: {
    errCode: 100,
    errMessage: 'Request URL not found',
  },

  UserNameInvalid: {
    errCode: 101,
    errMessage: 'Username is invalid',
  },
  PasswordInvalid: {
    errCode: 102,
    errMessage: 'Password is invalid',
  },
  UserNotFound: {
    errCode: 103,
    errMessage: 'User not  found',
  },

  QrInvalid: {
    errCode: 104,
    errMessage: 'qrCode not valid',
  },

  EmailInvalid: {
    errCode: 105,
    errMessage: 'Email not valid',
  },
  EmailDuplicate: {
    errCode: 106,
    errMessage: 'Email duplicated',
  },

  UserIdInvalid: {
    errCode: 107,
    errMessage: 'User id invalid',
  },

  // 200++ Error from Db
  CastError: {
    errCode: 201,
    errMessage: 'Cast field error',
  },
  DuplicateFieldError: {
    errCode: 202,
    errMessage: 'Duplicate field error',
  },

  // 300++ Error from Third Party
  JwtInvalid: {
    errCode: 300,
  },
  JwtMissing: {
    errCode: 301,
    errMessage: 'Jwt is missing',
  },

  // 400++ Error from Internal Server
  GenericError: {
    statusCode: httpStatus.INTERNAL_SERVER_ERROR,
    errCode: 400,
    errMessage: 'Something wrong happened.',
  },
};

module.exports = Error;
