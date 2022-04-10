const express = require("express");
const Patient = require("../../models/patientModel");
const Doctor = require("../../models/doctorModel");
const Prescription = require("../../models/prescriptionModel");
const bookAppointment = require("../../models/appointmentModel");

//this is the prescription of patient
exports.patientPrescription = async (req, res) => {
  const patientName = req.body.patientName;
  const patientEmail = req.body.patientEmail;
  const doctorEmail = req.body.doctorEmail;
  const dateofAppointment = req.body.dateofAppointment;
  const phoneNumber = req.body.phoneNumber;
  const medicine = req.body.medicine;
  const comments = req.body.comments;

  const nameRegex = /^[a-zA-Z\-]+$/;
  const phoneNumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (
    !patientName ||
    !dateofAppointment ||
    !phoneNumber ||
    !medicine ||
    !comments
  ) {
    return res.status(400).send({
      status: false,
      message: "Fields cannot be empty",
    });
  }

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

  const patientExists = await Patient.exists({ patientEmail: patientEmail });
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

  const newPrescription = await Prescription.create({
    patientName: patientName,
    patientEmail: patientEmail,
    doctorEmail: doctorEmail,
    dateofAppointment: dateofAppointment,
    phoneNumber: phoneNumber,
    medicine: medicine,
    comments: comments,
  });

  return res.status(200).send({
    status: true,
    message: "Prescription uploaded successfully",
    prescription: newPrescription,
  });
};


//this will update the profile of doctor
exports.updateDoctorProfile = async (req, res) => {
  if (!req.params.id)
    res.status(400).send({ status: false, message: "Id is required" });

  const id = await Doctor.findOne({ _id: req.params.id });
  if (!id)
    return res.status(400).send({
      status: false,
      message: "Provided id not found",
    });

  await Doctor.findByIdAndUpdate(req.params.id, req.body).catch((err) => {
    res.status(400).send({
      status: false,
      message: err.message,
    });
  });

  const updatedProfile = await Doctor.findOne({ _id: req.params.id });

  res.status(200).send({
    status: true,
    message: "Data updated",
    data: updatedProfile,
  });
};

//geting the appointments of a doctor
exports.getDoctorAppointments = async (req, res) => {
  if (!req.params.email)
    res
      .status(400)
      .send({ status: false, message: "Doctor email is required" });

  const doctorEmail = await Doctor.findOne({
   email: req.params.email,
  });

  if (!doctorEmail)
    return res.status(400).send({
      status: false,
      message: "Provided email not found in any appointments",
    });

  const appointments = await bookAppointment.find({
    doctorEmail: req.params.email,
  });

  if (appointments.length===0) {
    return res.status(400).send({
      status: false,
      message: "This doctor has no recorded appointments",
    });
  }

  return res.status(200).send({
    status: true,
    message: "These are the recorded appointments of the doctor",
    data: appointments,
  });
};
