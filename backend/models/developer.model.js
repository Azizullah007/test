const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const developerSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    phonenumber: { type: Number, required: true },
    address: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Developer = mongoose.model("Developer", developerSchema);

module.exports = Developer;
