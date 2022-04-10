const express = require("express");
const router = express.Router();

const {
  patientPrescription,
  updateDoctorProfile,
  getDoctorAppointments,
} = require("../controllers/api/doctor");

router.put("/updateDoctorProfile/:id", updateDoctorProfile);
router.post("/patientPrescription", patientPrescription);
router.get("/getDoctorAppointments/:email", getDoctorAppointments);

module.exports = router;
