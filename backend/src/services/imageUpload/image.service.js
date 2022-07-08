const { UserModel } = require('../../models');

const createImage = async (name, desc, image) => {
    const newImage = new UserModel({
      name,
      desc,
      image,
    });
  
    const user = await newImage.save();
    return user;
  };
  
  const getImageById = async (id) => {
    const user = await ImageModel.findById(id);
  
    return user;
  };
  
  const getImagebyName = async (name) => {
    const user = await ImageModel.findOne({ name });
  
    return user;
  };
  
  module.exports = {getImagebyName, getImageById, createImage };