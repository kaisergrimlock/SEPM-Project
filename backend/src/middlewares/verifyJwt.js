const Error = require('../config/constant/Error');
const { ResponseService, JwtService } = require('../services');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(' ')[1];
  const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
  if (!token) throw ResponseService.newError(Error.JwtMissing.errCode, Error.JwtMissing.errMessage);

  try {
    await JwtService.authenticateJWT(token, accessTokenSecret);
  } catch (err) {
    next(err);
  }
  next();
};
