const { User } = require("../models");

const checkEmail = async (email) => {
  return await User.findOne({ email });
};

// const isUserExist = async (id) => {
//   return await User.findById(id);
// };
const register = async (newUser) => {
  return await User.create(newUser);
};

const login = async (id, token) => {
  return await User.findByIdAndUpdate({ _id: id }, { token }, { new: true });
};

const logout = async (id) => {
  return await User.findByIdAndUpdate({ _id: id }, { token: null });
};

module.exports = {
  login,
  checkEmail,
  register,
  logout,
};
