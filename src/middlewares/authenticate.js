const { RequestError } = require("../helpers");
const { User } = require("../models");
require("dotenv").config();
const { SECRET_KEY } = process.env;
const jwt = require("jsonwebtoken");

const authenticate = async (req, _, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  try {
    if (bearer !== "Bearer") {
      next(RequestError(401, "Not auth"));
    }
    const { id } = jwt.verify(token, SECRET_KEY);
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
