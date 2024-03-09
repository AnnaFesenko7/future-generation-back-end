const { eventServices } = require("../../services");

const getAll = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const events = await eventServices.getAll(skip, limit);
  res.status(200).json({ status: "success", code: 200, payload: { events } });
};
module.exports = getAll;
