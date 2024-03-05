const mongoose = require("mongoose");

const { handleMongooseError } = require("../helpers");
const { eventTypeList } = require("../valuesLists");
const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  eventCover: {
    type: Object,
  },
  descriptionEng: {
    type: String,
    required: true,
  },
  descriptionUkr: {
    type: String,
    required: true,
  },
  eventType: {
    type: String,
    required: true,
    enum: eventTypeList,
  },
});

eventSchema.post("save", handleMongooseError);

const Event = mongoose.model("event", eventSchema);

module.exports = Event;
