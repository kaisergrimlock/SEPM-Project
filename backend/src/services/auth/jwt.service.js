const jwt = require('jsonwebtoken');

const ResponseService = require('../response/response.service');
const Error = require('../../config/constant/Error');

const generateJWT = async (userId) => {
  const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
  const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

  const accessTokenExpiredIn = process.env.ACCESS_TOKEN_EXPIRES_IN;
  const refreshTokenExpiredIn = process.env.REFRESH_TOKEN_EXPIRES_IN;

  const accessToken = jwt.sign({ userId }, accessTokenSecret, { expiresIn: accessTokenExpiredIn });
  const refreshToken = jwt.sign({ userId }, refreshTokenSecret, { expiresIn: refreshTokenExpiredIn });

  return { accessToken, refreshToken };
};

const authenticateJWT = async (token, secret) => {
  return jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      throw ResponseService.newError(Error.JwtInvalid.errCode, err.message);
    }
    return decoded;
  });
};
module.exports = { generateJWT, authenticateJWT };
