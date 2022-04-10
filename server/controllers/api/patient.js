const express = require("express");
const Patient = require("../../models/patientModel");
const Doctor = require("../../models/doctorModel");
const bookAppointment = require("../../models/appointmentModel");

//book an appointment for a patient
exports.bookAppointment = async (req, res) => {
  const patientName = req.body.patientName;
  const patientEmail = req.body.patientEmail;
  const doctorEmail = req.body.doctorEmail;
  const dateofAppointment = req.body.dateofAppointment;
  const phoneNumber = req.body.phoneNumber;
  const department = req.body.department;
  const gender = req.body.gender;
  const symptoms = req.body.symptoms;

  const nameRegex = /^[a-zA-Z\-]+$/;
  const phoneNumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!nameRegex.test(patientName)) {
    return res.status(400).send({
      status: false,
      message: "Please provide name in correct format",
    });
  }

  if (!phoneNumberRegex.test(phoneNumber)) {
    return res.status(400).send({
      status: false,
      message: "Please provide phone number in correct format",
    });
  }

  if (!emailRegex.test(patientEmail)) {
    return res.status(400).send({
      status: false,
      message: "Please provide patient email in correct format",
    });
  }

  if (!emailRegex.test(doctorEmail)) {
    return res.status(400).send({
      status: false,
      message: "Please provide doctor email in correct format",
    });
  }

  if (
    !patientName ||
    !patientEmail ||
    !doctorEmail ||
    !dateofAppointment ||
    !phoneNumber ||
    !department ||
    !gender ||
    !symptoms
  ) {
    return res.status(400).send({
      status: false,
      message: "Please fill all the fields",
    });
  }

  //Check if the email already exists
  const patientExists = await Patient.exists({ email: patientEmail });
  if (!patientExists) {
    return res.status(400).send({
      status: false,
      message: "No patient with this email exists. Please register first.",
    });
  }

  const doctorExists = await Doctor.exists({ doctorEmail: doctorEmail });
  if (!doctorExists) {
    return res.status(400).send({
      status: false,
      message: "No doctor with this email exists. Please register first.",
    });
  }

  const newPatientAppointment = await bookAppointment.create({
    patientName: patientName,
    patientEmail: patientEmail,
    doctorEmail: doctorEmail,
    dateofAppointment: dateofAppointment,
    phoneNumber: phoneNumber,
    department: department,
    gender: gender,
    symptoms: symptoms,
  });

  return res.status(200).send({
    status: true,
    message: "Appointment booked",
    newPatientAppointment: newPatientAppointment,
  });
};

//update the details of a patient
exports.updatePatient = async (req, res) => {
  if (!req.params.id)
    res.status(400).send({ status: false, message: "Patient id is required" });

  const id = await Patient.findOne({ _id: req.params.id });
  if (!id)
    return res.status(400).send({
      status: false,
      message: "User with provided id not found",
    });

  await Patient.findByIdAndUpdate(req.params.id, req.body).catch((err) => {
    res.status(400).send({
      status: false,
      message: err.message,
    });
  });

  const updatedPatient = await User.findOne({ _id: req.params.id });

  res.status(200).send({
    status: true,
    message: "Data updated",
    data: updatedPatient,
  });
};

//get the appointments for the patient
exports.getPatientAppointments = async (req, res) => {
  if (!req.params.email)
    res
      .status(400)
      .send({ status: false, message: "Patient email is required" });

  const patientEmail = await Patient.findOne({
    email: req.params.email,
  });

  if (!patientEmail)
    return res.status(400).send({
      status: false,
      message: "No registered patient found for this email",
    });

  const appointments = await bookAppointment.find({
    patientEmail: req.params.email,
  });

  if (appointments.length === 0) {
    return res.status(400).send({
      status: false,
      message: "This patient has no recorded appointments",
    });
  }

  return res.status(200).send({
    status: true,
    message: "These are the recorded appointments of the patient",
    data: appointments,
  });
};
