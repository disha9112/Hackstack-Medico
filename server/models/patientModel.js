const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patient = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

const Patient = mongoose.model("patient", patient);

module.exports = Patient;
