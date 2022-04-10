const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookappointment = new Schema({
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
  department: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  symptoms: {
    type: String,
    required: true,
  },
});

const bookAppointment = mongoose.model("bookappointment", bookappointment);

module.exports = bookAppointment;
