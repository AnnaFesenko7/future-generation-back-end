const { Event } = require("../models");

const getAll = async () => {
  const events = await Event.find({}, "-createdAt -updatedAt");
  return events;
};

const findByID = async (eventId) => {
  return await Event.findById(eventId);
};

const addEvent = async (newEvent) => {
  return await Event.create({ ...newEvent });
};

const updateById = async (id, newEvent) => {
  return await Event.findByIdAndUpdate(id, newEvent, { new: true });
};

const removeEvent = async (eventId) => {
  await Event.findByIdAndRemove({ _id: eventId });
};

module.exports = {
  getAll,
  findByID,
  addEvent,
  removeEvent,
  updateById,
};
