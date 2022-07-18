/* eslint-disable no-useless-escape */
const bcrypt = require('bcrypt');
const ResponseService = require('../response/response.service');
const UserService = require('../user/user.service');

const Error = require('../../config/constant/Error');

const register = async (name, email, password) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (!name) throw ResponseService.newError(Error.UserNameInvalid.errCode, Error.UserNameInvalid.errMessage);

  // If email empty
  if (!email) throw ResponseService.newError(Error.EmailEmpty.errCode, Error.EmailEmpty.errMessage);
  // If email invalid
  if (!emailRegex.test(email)) throw ResponseService.newError(Error.EmailInvalid.errCode, Error.EmailInvalid.errMessage);
  else {
    // Check email duplicated
    const user = await UserService.getUserByEmail(email);
    if (user) throw ResponseService.newError(Error.EmailDuplicate.errCode, Error.EmailDuplicate.errMessage);
  }

  // If password empty
  if (!password) throw ResponseService.newError(Error.PasswordInvalid.errCode, Error.PasswordInvalid.errMessage);
  // If password invalid
  if (!passwordRegex.test(password))
    throw ResponseService.newError(Error.PasswordInvalid.errCode, Error.PasswordInvalid.errMessage);

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await UserService.createUser(name, email, hashedPassword);
  return user;
};

const login = async (email, password) => {
  if (!email) throw ResponseService.newError(Error.EmailInvalid.errCode, Error.EmailInvalid.errMessage);
  if (!password) throw ResponseService.newError(Error.PasswordInvalid.errCode, Error.PasswordInvalid.errMessage);

  const user = await UserService.getUserByEmail(email);
  if (!user) throw ResponseService.newError(Error.UserNotFound.errCode, Error.UserNotFound.errMessage);

  const isPassWordValid = await bcrypt.compare(password, user.password);
  if (!isPassWordValid) throw ResponseService.newError(Error.PasswordInvalid.errCode, Error.PasswordInvalid.errMessage);

  return user._id.valueOf();
};

module.exports = { register, login };
