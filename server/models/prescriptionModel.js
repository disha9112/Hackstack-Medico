const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const prescription = new Schema({
  patientName: {
    type: String,
    required: true,
  },
  patientEmail: {
    type: String,
    required: true,
  },
  doctorEmail: {
    type: String,
    required: true,
  },
  dateofAppointment: {
    type: Date,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  medicine: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
});

const Prescription = mongoose.model("prescription", prescription);

module.exports = Prescription;
