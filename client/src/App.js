import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Test ------------------------- Importing the Components to be used in here ------------------------
import Homepage from "./Pages/Homepage/Homepage";
import Navbar from "./Components/Navbar/navbar.component";
import Profile from "./Pages/Profile/Profile";
import Dashboard from "./Pages/Profile/Dashboard";
import BookAppointment from "./Pages/Profile/BookAppointment";
import ResetPassword from "./Pages/Profile/ResetPassword";
import UpdateProfile from "./Pages/Profile/UpdateProfile";

import React from "react";
import BMICalculatorPage from "./Pages/BMI Calculator/BMICalcutor";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignUpOverall from "./Pages/SignUp/SignUpOverall";
import SignUpPageDoctor from "./Pages/SignUp/SignUpPageDoctor";
import SignUpPagePatient from "./Pages/SignUp/SignUpPagePatient";
import ContactUsPage from "./Pages/ContactUs/ContactUs";
// >>>>>>> main

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/profile" element={<Profile />}>
            <Route path="" element={<Dashboard />}></Route>
            <Route path="update-profile" element={<UpdateProfile />}></Route>
            <Route
              path="book-appointment"
              element={<BookAppointment />}
            ></Route>
            <Route path="reset-password" element={<ResetPassword />}></Route>
          </Route>
          <Route
            path="/bmi"
            element={<BMICalculatorPage></BMICalculatorPage>}
          ></Route>
          <Route path="/contact" element={<ContactUsPage></ContactUsPage>}></Route>
          <Route
            path="/register"
            element={<SignUpOverall></SignUpOverall>}
          ></Route>
          <Route
            path="/registerDoctor"
            element={<SignUpPageDoctor></SignUpPageDoctor>}
          ></Route>
          <Route
            path="/registerPatient"
            element={<SignUpPagePatient></SignUpPagePatient>}
          ></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        </Routes>
      </Router>
    </div>
  );
  }

// Test ------------------------ Exporting our current componet -------------------------------------
export default App;
