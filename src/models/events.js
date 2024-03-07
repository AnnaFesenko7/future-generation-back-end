const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");
const { eventTypeList } = require("../valuesLists");
const eventSchema = new Schema(
  {
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
  },
  { versionKey: false, timestamps: true }
);

eventSchema.post("save", handleMongooseError);

const Event = model("event", eventSchema);

module.exports = Event;
