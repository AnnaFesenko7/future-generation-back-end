const { eventServices } = require("../../services");

const add = async (req, res) => {
  const event = await eventServices.addEvent(req.body);
  res.status(201).json({ status: "Success", code: 201, payload: { event } });
};
module.exports = add;
