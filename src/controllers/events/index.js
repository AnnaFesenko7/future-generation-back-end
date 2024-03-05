const getAll = require("./getAll");
// const add = require("./add");
// const getById = require("./getById");
// const updateEvent = require("./updateEvent");
// const deleteBook = require("./deleteBook");
// const updateImages = require("./updateImages");
const { ctrlWrapper } = require("../../helpers");

module.exports = {
  getAll: ctrlWrapper(getAll),
  // add: ctrlWrapper(add),
  // getById: ctrlWrapper(getById),
  // deleteBook: ctrlWrapper(deleteBook),
  // updateEvent: ctrlWrapper(updateEvent),
  // updateImages: ctrlWrapper(updateImages),
};
