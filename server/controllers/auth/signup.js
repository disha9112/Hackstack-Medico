const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Patient = require("../../models/patientModel");
const Doctor = require("../../models/doctorModel");

exports.signupPatient = async (req, res) => {
  //Extract data from request body
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  const bloodGroup = req.body.bloodGroup;
  const age = req.body.age;
  const gender = req.body.gender;

  const nameRegex = /^[a-zA-Z\-]+$/;
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  //Check if fields are not empty
  if (
    !name ||
    !password ||
    !email ||
    !phoneNumber ||
    !bloodGroup ||
    !age ||
    !gender
  ) {
    return res.status(400).send({
      status: false,
      message: "Fields cannot be empty",
    });
  }

  //Check if the email already exists
  const emailExists = await Patient.exists({ email: email });
  if (emailExists) {
    return res.status(400).send({
      status: false,
      message: "This patient already exists",
    });
  }

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

  //Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  //Add into Database
  const newPatient = await Patient.create({
    name: name,
    password: hashedPassword,
    email: email,
    phoneNumber: phoneNumber,
    bloodGroup: bloodGroup,
    age: age,
    gender: gender,
  });

  //Generate JWT token
  const token = jwt.sign({ email: newPatient.email }, process.env.JWT_TOKEN);

  //Send the response
  return res.status(200).send({
    status: true,
    message: "Patient signed up successfully",
    token: token,
    patient: newPatient,
  });
};

exports.signupDoctor = async (req, res) => {
  //Extract data from request body
  const name = req.body.name;
  const password = req.body.password;
  const phoneNumber = req.body.phoneNumber;
  const email = req.body.email;
  const department = req.body.department;
  const experience = req.body.experience;
  const gender = req.body.gender;

  const nameRegex = /^[a-zA-Z\-]+$/;
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  //Check if fields are not empty
  if (
    !name ||
    !password ||
    !email ||
    !phoneNumber ||
    !email ||
    !department ||
    !experience ||
    !gender
  ) {
    return res.status(400).send({
      status: false,
      message: "Fields cannot be empty",
    });
  }

  //Check if the email already exists
  const emailExists = await Doctor.exists({ email: email });
  if (emailExists) {
    return res.status(400).send({
      status: false,
      message: "This doctor already exists",
    });
  }

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

  //Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  //Add into Database
  const newDoctor = await Doctor.create({
    name: name,
    password: hashedPassword,
    phoneNumber: phoneNumber,
    email: email,
    department: department,
    experience: experience,
    gender: gender,
  });

  //Generate JWT token
  const token = jwt.sign({ email: newDoctor.email }, process.env.JWT_TOKEN);

  //Send the response
  return res.status(200).send({
    status: true,
    message: "Doctor signed up successfully",
    token: token,
    doctor: newDoctor,
  });
};
