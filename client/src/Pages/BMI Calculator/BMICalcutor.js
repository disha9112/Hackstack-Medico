import React from "react";
import Navbar from "../../Components/Navbar/navbar.component";
import BMICalculator from "../../Components/BMI Calculator/BMICalculator";
import Footer from "../../Components/Footer/Footer";

function BMICalculatorPage() {
  return (
    <div className="bmi">
      <BMICalculator></BMICalculator>
      <Footer></Footer>
    </div>
  );
}

export default BMICalculatorPage;
