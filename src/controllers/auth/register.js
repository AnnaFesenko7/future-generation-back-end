const bcrypt = require("bcrypt");

const { RequestError } = require("../../helpers");
const { authServices } = require("../../services");

const register = async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    throw RequestError(400, "Missing required field");
  }

  const user = await authServices.checkEmail(email);
  console.log(user);
  if (user) {
    throw RequestError(409, `User with ${email} already exist`);
  }

  const hashPassword = bcrypt.hashSync(password, 10);
  const newUser = await authServices.register({
    email,
    password: hashPassword,
    name,
  });
  res.status(201).json({
    status: "created",
    code: 201,
    user: {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    },
  });
};
module.exports = register;
