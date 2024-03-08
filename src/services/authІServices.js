const { User } = require("../models");

const checkEmail = async (email) => {
  return await User.findOne({ email });
};

const register = async (newUser) => {
  return await User.create(newUser);
};

const login = async (id, token) => {
  return await User.findByIdAndUpdate({ _id: id }, { token }, { new: true });
};

module.exports = {
  login,
  checkEmail,
  register,
};
