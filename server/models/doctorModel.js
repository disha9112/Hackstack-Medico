const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctor = new Schema({
  name: {
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
  email: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

const Doctor = mongoose.model("doctor", doctor);

module.exports = Doctor;
