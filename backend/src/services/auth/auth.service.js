const { UserModel } = require('../../models');
const ResponseService = require('../response/response.service');
// const Error = require('../../config/constant/Error');

const createUser = async (userBody) => {
  const user = await UserModel.create(userBody);

  // throw ResponseService.newError(
  //   Error.PasswordInvalid.errCode,
  //   Error.PasswordInvalid.message
  // );
  return user;
};

const getUserById = async (id) => {
  const user = await UserModel.findById(id);

  ResponseService.newSucess(user);

  return user;
};

module.exports = { getUserById, createUser };
