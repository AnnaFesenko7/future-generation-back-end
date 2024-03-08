const { RequestError } = require("../../helpers");
const { eventServices } = require("../../services");

const getById = async (req, res) => {
  const { id: eventId } = req.params;
  const event = await eventServices.findByID(eventId);
  if (!event) {
   throw RequestError(400, `Event with id ${_id} not found`);
  }
  res.status(200).json({ status: "success", code: 200, payload: { event } });
};
module.exports = getById;
