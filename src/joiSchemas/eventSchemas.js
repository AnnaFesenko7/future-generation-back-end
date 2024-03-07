const Joi = require("joi");
// const { yearRegExp } = require('../regularExpressions');
const { eventTypeList } = require("../valuesLists");

const add = Joi.object({
  title: Joi.string().required(),
  eventCover: Joi.object(),
  descriptionEng: Joi.string().required(),
  descriptionUkr: Joi.string().required(),
  eventType: Joi.string()
    .valid(...eventTypeList)
    .required(),
});

module.exports = {
  add,
};
