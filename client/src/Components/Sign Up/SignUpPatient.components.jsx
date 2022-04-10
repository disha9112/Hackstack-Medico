import React, { useState, useEffect } from "react";
import { validateEmail } from "./utils";
import usePasswordValidator from "./usePasswordValidator";
import LabelInput from "../LabelInput/LabelInput";
import Button from "../Button/Button";

import styles from "./SignUp.module.css";

function SignUpPatient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [age, setAge] = useState("");

  const [password, setPassword, passwordError] = usePasswordValidator({
    min: 8,
    max: 15,
  });
  useEffect(() => {
    if (!email) {
      setEmailError("");
    } else {
      if (validateEmail(email)) {
        setEmailError("");
      } else {
        setEmailError("Please enter a valid email.");
      }
    }
  }, [email]);

  useEffect(() => {
    if (!confirmPassword || !password) {
      setConfirmPasswordError("");
    } else {
      if (password !== confirmPassword) {
        setConfirmPasswordError("The passwords must match.");
      } else {
        setConfirmPasswordError("");
      }
    }
  }, [password, confirmPassword]);

  const updateName = (currentValue) => {
    setName(currentValue);
  };

  const updateDepartment = (currentValue) => {
    setDepartment(currentValue);
  };

  const updateExperience = (currentValue) => {
    setExperience(currentValue);
  };

  const updateGender = (currentValue) => {
    setGender(currentValue);
  };

  const updatePhoneNumber = (currentValue) => {
    setPhoneNumber(currentValue);
  };

  const updateAge = (currentValue) => {
    setAge(currentValue);
  };

  const updateBloodGroup = (currentValue) => {
    setBloodGroup(currentValue);
  };

  return (
    <div className={`${styles["signup"]}`}>
      <form>
        <div className={`${styles["signup-header"]}`}>Join us today!</div>

        <div className={`${styles["signup-form-container"]}`}>
          <div className={`${styles["image-container"]}`}>
            <div className={`${styles["patient-header"]}`}>
              Register as Patient
            </div>
            <img src="images/Sign Up/sign-up.png" alt="Sign Up"></img>
          </div>

          <div className={`${styles["form-container-patient"]}`}>
            <LabelInput
              type="text"
              value={name}
              id="name"
              name="name"
              onChange={updateName}
            >
              Name
            </LabelInput>

            <LabelInput
              value={phoneNumber}
              type="text"
              id="phone-number"
              name="phone-number"
              onChange={updatePhoneNumber}
            >
              Phone Number
            </LabelInput>

            <LabelInput
              value={bloodGroup}
              type="text"
              id="blood-group"
              name="blood-group"
              onChange={updateBloodGroup}
            >
              Blood Group
            </LabelInput>

            <LabelInput
              value={age}
              type="text"
              id="age"
              name="age"
              onChange={updateAge}
            >
              Age
            </LabelInput>

            <LabelInput
              value={gender}
              type="text"
              id="email"
              name="email"
              onChange={setGender}
            >
              Gender
            </LabelInput>

            <LabelInput
              value={email}
              type="text"
              id="email"
              name="email"
              onChange={setEmail}
              error={emailError}
            >
              Email
            </LabelInput>

            <LabelInput
              value={password}
              type="password"
              id="password"
              name="password"
              onChange={setPassword}
              error={passwordError}
            >
              Password
            </LabelInput>

            <LabelInput
              value={confirmPassword}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={setConfirmPassword}
              error={confirmPasswordError}
            >
              Confirm Password
            </LabelInput>

            <div className="signup-button-container">
              <Button type="submit">Sign Up</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUpPatient;
