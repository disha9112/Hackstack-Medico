import React, { useState, useEffect } from "react";

import { validateEmail } from "../Sign In/utils";
import LabelInput from "../LabelInput/LabelInput";
import Button from "../Button/Button";
import styles from "./contact.styles.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

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

  const updateName = (currentValue) => {
    setName(currentValue);
  };

  const updatePhoneNumber = (currentValue) => {
    setPhoneNumber(currentValue);
  };

  const updateMessage = (currentValue) => {
    setMessage(currentValue);
  };

  return (
    <div className={`${styles["contactus"]}`}>
      <form>
        <div className="contactus-header">We'd love to hear from you!</div>

        <div className={`${styles["contactus-form-container"]}`}>
          <div className={`${styles["contactus-form-container-content"]}`}>
            <LabelInput
              type="textarea"
              value={name}
              id="name"
              name="name"
              onChange={updateName}
            >
              Name
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
              value={phoneNumber}
              type="text"
              id="phone-number"
              name="phone-number"
              onChange={updatePhoneNumber}
            >
              Phone Number
            </LabelInput>

            <LabelInput
              value={message}
              type="text"
              id="message"
              name="message"
              onChange={updateMessage}
            >
              Message
            </LabelInput>

            <div className="contactus-signup-button-container">
              <Button type="submit">Submit</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
