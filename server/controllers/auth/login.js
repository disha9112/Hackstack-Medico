const express = require("express");
const Patient = require("../../models/patientModel");
const Doctor = require("../../models/doctorModel");

exports.login = async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;

  if (!name || !password || !email) {
    return res.status(400).send({
      status: false,
      message: "Fields cannot be empty",
    });
  }

  const patientEmailExists = await Patient.exists({ email: email });
  const doctorEmailExists = await Doctor.exists({ email: email });

  if (!(patientEmailExists || doctorEmailExists)) {
    return res.status(400).send({
      status: false,
      message: "No one with this email exists",
    });
  }

  const nameRegex = /^[a-zA-Z\-]+$/;
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!nameRegex.test(name)) {
    return res.status(400).send({
      status: false,
      message: "Please provide name in correct format",
    });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).send({
      status: false,
      message: "Please provide email in correct format",
    });
  }

  const patientExists = await Patient.exists({ email: email });
  const doctorExists = await Doctor.exists({ email: email });
  if (patientExists) {
    return res.status(200).send({
      status: true,
      message: "Patient logged in",
    });
  } else {
    return res.status(200).send({
      status: true,
      message: "Doctor logged in",
    });
  }
};
