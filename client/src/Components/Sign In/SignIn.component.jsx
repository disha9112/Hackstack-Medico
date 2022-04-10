import React, { useState, useEffect } from "react";
import { validateEmail } from "./utils";
import usePasswordValidator from "./usePasswordValidator";
import LabelInput from "../LabelInput/LabelInput";
import Button from "../Button/Button";

import "./SignIn.styles.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
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

  async function onLoginSubmit() {
    var loginObject = {
      email: email,
      password: password,
    };
    console.log(process.env.REACT_APP_SERVER_URL);

    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/login`,
      loginObject
    );

    console.log(response);

    if (response.status == 200) {
      alert(response.data.msg);
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: response.data.email,
          id: response.data._id,
          token: response.data.token,
        })
      );
      window.location.reload(false);
    } else {
      alert(response.data.msg);
    }
  }

  return (
    <div className="signup">
      <form>
        <div className="signup-header">Welcome back!</div>

        <div className="signup-form-container">
          <div className="image-container">
            <img src="images/Sign in/sign-in.png" alt="Login"></img>
          </div>

          <div className="form-container">
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

            <div className="signup-button-container">
              <Button onClick={onLoginSubmit} isReverse={true}>
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
