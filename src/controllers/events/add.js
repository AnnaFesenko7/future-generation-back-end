const { eventServices } = require("../../services");
const { RequestError } = require("../../helpers");

const add = async (req, res) => {
  const { userStatus } = req.user;
  if (userStatus !== "admin") {
    throw RequestError(403);
  }
  const event = await eventServices.addEvent(req.body);
  res.status(201).json({ status: "Success", code: 201, payload: { event } });
};
module.exports = add;
