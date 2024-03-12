const { Schema, model } = require("mongoose");
const {
  // passwordRegexp,

  emailRegExp,
} = require("../regularExpressions");
const { handleMongooseError } = require("../helpers");
const { langList } = require("../valuesLists");

const userSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 2,
    },
    password: {
      type: String,
      minlength: 5,
      // match: passwordRegexp,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: emailRegExp,
    },
    token: {
      type: String,
      default: null,
    },
    language: {
      type: String,
      enum: langList,
      default: "ua",
    },
    userStatus: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = User;
