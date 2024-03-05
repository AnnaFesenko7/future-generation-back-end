// const { Book } = require('../../models');

const { RequestError } = require("../../helpers");
const { eventsServices } = require("../../services");

const getById = async (req, res) => {
  const { id } = req.params;

  // const book = await Book.findOne({ _id: id, owner });
  const event = await eventsServices.getById(id);
  if (!event) {
    RequestError(400, `Event with id ${id} not found`);
  }
  res.status(200).json({ status: "success", code: 200, payload: { event } });
};
module.exports = getById;
