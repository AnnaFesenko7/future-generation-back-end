const { authServices } = require("../../services");

const logout = async (req, res) => {
  const { _id } = req.user;

  await authServices.logout(_id);
  res.status(204).json();
};

module.exports = logout;
