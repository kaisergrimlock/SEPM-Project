const { UserModel } = require('../../models');

const createUser = async (name, email, password) => {
  const userToBeCreate = new UserModel({
    name,
    email,
    password,
  });

  const user = await userToBeCreate.save();
  return user;
};

const getUserById = async (id) => {
  const user = await UserModel.findById(id);

  return user;
};

const getUserByEmail = async (email) => {
  const user = await UserModel.findOne({ email });

  return user;
};

module.exports = { getUserById, createUser, getUserByEmail };
