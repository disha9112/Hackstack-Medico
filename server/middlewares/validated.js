const { express } = require("express");
const jwt = require("jsonwebtoken");
const Patient = require("../models/patientModel");
const Doctor = require("../models/doctorModel");

const isValidated = async (req, res, next) => {
  const verifiedToken = await jwt.verify(
    req.headers.token,
    process.env.JWT_TOKEN
  );

  if (!verifiedToken) {
    return res.status(400).send({
      status: false,
      message: "Invalid token",
    });
  }

  const patientExists = await Patient.findOne({ email: verifiedToken.email });
  console.log(patientExists);

  if (!patientExists) {
    const doctorExists = await Doctor.findOne({ email: verifiedToken.email });
    {
      if (!doctorExists) {
        return res.status(400).send({
          status: false,
          message: "Doctor does not exist in database",
        });
      }
    }
  }
  next();
};

module.exports = isValidated;
