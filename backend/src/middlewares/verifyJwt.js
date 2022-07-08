const Error = require('../config/constant/Error');
const { ResponseService, JwtService } = require('../services');

module.exports = async (req, res, next) => {
  const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
  const authHeader = req.headers.authorization;
  if (!authHeader) next(ResponseService.newError(Error.AuthHeaderMissing.errCode, Error.AuthHeaderMissing.errMessage));
  const token = authHeader.split(' ')[1];
  if (!token) throw ResponseService.newError(Error.JwtMissing.errCode, Error.JwtMissing.errMessage);
  try {
    await JwtService.authenticateJWT(token, accessTokenSecret);
  } catch (err) {
    next(err);
  }
  next();
};
