const Error = require('../config/constant/Error');
const { ResponseService, JwtService } = require('../services');
const { catchAsync } = require('../utils');

const verifyJwt = catchAsync(async (req, res, next) => {
  const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
  const authHeader = req.headers.authorization;
  if (!authHeader) throw ResponseService.newError(Error.AuthHeaderMissing.errCode, Error.AuthHeaderMissing.errMessage);
  const token = authHeader.split(' ')[1];
  if (!token) throw ResponseService.newError(Error.JwtMissing.errCode, Error.JwtMissing.errMessage);

  await JwtService.authenticateJWT(token, accessTokenSecret);

  next();
});
module.exports = verifyJwt;
