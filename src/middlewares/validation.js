// const createError = require('http-errors');
const { RequestError } = require("../helpers");

const validation = (schema) => {
  const func = async (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(RequestError(400, "missing required name field or name is wrong"));
    }
    next();
  };
  return func;
};

module.exports = validation;
