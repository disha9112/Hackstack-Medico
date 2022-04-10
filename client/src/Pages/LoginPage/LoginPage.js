import React from "react";
import Navbar from "../../Components/Navbar/navbar.component";
import Footer from "../../Components/Footer/Footer";
import SignIn from "../../Components/Sign In/SignIn.component";

function LoginPage() {
  return (
    <div className="LoginPage">
      <SignIn></SignIn>
      <Footer></Footer>
    </div>
  );
}

export default LoginPage;
