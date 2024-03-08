const { eventServices } = require("../../services");
const { RequestError } = require("../../helpers");

const deleteEvent = async (req, res) => {
  const { userStatus } = req.user;
  if (userStatus !== "admin") {
    throw RequestError(403);
  }

  const { id: eventId } = req.params;
  await eventServices.removeEvent(eventId);
  res.status(200).json({ status: "Success" });
};
module.exports = deleteEvent;
