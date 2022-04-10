const express = require("express");
const router = express.Router();

const { signupDoctor, signupPatient } = require("../controllers/auth/signup");
const { login } = require("../controllers/auth/login");
const isValidated = require("../middlewares/validated");

router.post("/signupDoctor", signupDoctor);
router.post("/signupPatient", signupPatient);
router.post("/login", isValidated, login);

module.exports = router;
