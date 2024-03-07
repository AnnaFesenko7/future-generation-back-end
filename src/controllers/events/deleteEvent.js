const { eventServices } = require("../../services");

const deleteEvent = async (req, res) => {
  const { id: eventId } = req.params;
  await eventServices.removeEvent(eventId);
  res.status(200).json({ status: "Success" });
};
module.exports = deleteEvent;
