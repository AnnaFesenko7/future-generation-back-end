const bcrypt = require("bcrypt");
const { tokenProcessor, RequestError } = require("../../helpers");
const { authServices } = require("../../services");
const { tokenGeneration } = tokenProcessor;

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  if (!email || !password) {
    throw RequestError(400, "Missing required field");
  }
  const user = await authServices.checkEmail(email);

  if (!user) {
    throw RequestError(401, `Password or email invalid`);
  }

  const passCompare = bcrypt.compareSync(password, user.password);

  if (!passCompare) {
    throw RequestError(401, `Password or email invalid`);
  }
  const payload = {
    id: user._id,
  };
  const token = tokenGeneration(payload);

  const updatedUser = authServices.login(user._id, token);

  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      token,
    },
  });
};
module.exports = login;
