const joi = require('joi');
const { langList } = require('../valuesLists');
const changeLangSchema = joi.object({
  language: joi
    .string()
    .valid(...langList)
    .required(),
});


module.exports = {
  changeLangSchema,
 
};
