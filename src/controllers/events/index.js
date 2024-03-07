const getAll = require("./getAll");
const add = require("./add");
const getById = require("./getById");
const updateById = require("./updateById");
const deleteEvent = require("./deleteEvent");
const updateImages = require("./updateImages");
const { ctrlWrapper } = require("../../helpers");

module.exports = {
  getAll: ctrlWrapper(getAll),
  add: ctrlWrapper(add),
  getById: ctrlWrapper(getById),
  deleteEvent: ctrlWrapper(deleteEvent),
  updateById: ctrlWrapper(updateById),
  updateImages: ctrlWrapper(updateImages),
};
