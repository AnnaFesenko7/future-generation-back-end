const { eventServices } = require("../../services");

const getAll = async (req, res) => {
  const events = await eventServices.getAll();
  res.status(200).json({ status: "success", code: 200, payload: { events } });
};
module.exports = getAll;
