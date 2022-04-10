const express = require("express");
const router = express.Router();

const {
  bookAppointment,
  updatePatient,
  getPatientAppointments,
} = require("../controllers/api/patient");

router.post("/bookAppointment", bookAppointment);
router.put("/updatePatient/:id", updatePatient);
router.get("/getPatientAppointments/:email", getPatientAppointments);

module.exports = router;
