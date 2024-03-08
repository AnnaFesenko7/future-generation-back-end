const { RequestError } = require("../../helpers");
const { eventServices } = require("../../services");

const updateById = async (req, res) => {
  const { userStatus } = req.user;
  if (userStatus !== "admin") {
    throw RequestError(403);
  }

  const { id } = req.params;
  const updatedEvent = await eventServices.updateById(id, { ...req.body });

  if (!updatedEvent) {
    throw RequestError(404, `Event with id ${id} not found`);
  }
  res.status(200).json({
    status: "success",
    code: 200,
    payload: { updatedEvent },
  });
};
module.exports = updateById;
