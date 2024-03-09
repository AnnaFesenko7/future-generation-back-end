const { RequestError, tokenProcessor } = require("../helpers");
const { User } = require("../models");
const { tokenVerify } = tokenProcessor;

const authenticate = async (req, _, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  try {
    if (bearer !== "Bearer") {
      next(RequestError(401, "Not auth"));
    }
    const id = tokenVerify(token);

    const user = await User.findById(id);
    if (!user || !user.token || user.token !== token) {
      next(RequestError(401, "Not auth"));
    }
    req.user = user;
    next();
  } catch (error) {
    next(RequestError(401, "Not auth"));
  }
};

module.exports = authenticate;
