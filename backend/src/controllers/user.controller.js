const { ResponseService, UserService } = require('../services');
const Error = require('../config/constant/Error');
const { catchAsync } = require('../utils');

const getUserById = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const user = await UserService.getUserById(userId);
  if (!user) {
    throw ResponseService.newError(Error.UserNotFound.errCode, Error.UserNotFound.errMessage);
  }
  res.status(200).json(ResponseService.newSucess(user));
});

module.exports = { getUserById };
