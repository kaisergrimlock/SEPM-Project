const httpStatus = require('http-status');
const { ResponseService, AuthService } = require('../../services');
const { catchAsync } = require('../../utils');

const redirect = (req, res) => {
  res.render('login.ejs', { error: req.flash('error') });
};

const createUser = catchAsync(async (req, res) => {
  await AuthService.createUser(req.body);
  res.status(httpStatus.CREATED).json(ResponseService.newSucess());
});

const validateUser = catchAsync(async (req, res) => {
  const user = await AuthService.getUserById(req, res);
  if (!user) {
    throw ResponseService.newError(Error.UserNotFound.errCode, Error.UserNotFound.errMessage);
  }

  res.render('home', { user });
});

module.exports = { createUser, validateUser, redirect };
