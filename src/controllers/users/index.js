const getCurrent = require("./getCurrent");
const changeLang = require("./changeLang");

const { ctrlWrapper } = require("../../helpers");

module.exports = {
  getCurrent: ctrlWrapper(getCurrent),
  changeLang: ctrlWrapper(changeLang),
};
