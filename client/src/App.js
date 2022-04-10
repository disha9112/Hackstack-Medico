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
// <<<<<<< frontend-dheeraj
// =======
import BMICalculatorPage from "./Pages/BMI Calculator/BMICalcutor";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignUpPageDoctor from "./Pages/SignUp/SignUpPageDoctor";
import SignUpPagePatient from "./Pages/SignUp/SignUpPagePatient";
// >>>>>>> main

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          {/* // <<<<<<< frontend-dheeraj */}
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
          <Route path="/registerDoctor" element={<SignUpPageDoctor></SignUpPageDoctor>}></Route>
          <Route path="/registerPatient" element={<SignUpPagePatient></SignUpPagePatient>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        </Routes>
      </Router>
      {/* // ======= */}
      {/* //           <Route path="/" element={<Homepage />}></Route>
//           <Route path="/bmi" element={<BMICalculatorPage></BMICalculatorPage>}></Route>
//           <Route path="/register" element={<SignUpPage></SignUpPage>}></Route>
//           <Route path="/login" element={<LoginPage></LoginPage>}></Route> */}
      {/* </Routes> */}
      {/* </Router> */}

      {/* // >>>>>>> main */}
    </div>
  );
}

// Test ------------------------ Exporting our current componet -------------------------------------
export default App;
