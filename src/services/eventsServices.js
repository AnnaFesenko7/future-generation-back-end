const { Event } = require("../models");

const getAll = async () => {
  const events = await Event.find({});
  return events;
};

const getById = async (id) => {
  return await Event.findOne({ _id: id });
};

const addEvent = async (newEvent) => {
  return await Event.create({ ...newEvent });
};

// const updateEvent = async (id,  status) => {
//   return await Event.findByIdAndUpdate(
//     { _id: id }
//   );
// };

// const removeEvent = async (eventId) => {
//   await Event.findByIdAndRemove({ _id: eventId });
// };

module.exports = {
  getAll,
  getById,
  addEvent,
  // updateEvent,
  // removeEvent,
};
