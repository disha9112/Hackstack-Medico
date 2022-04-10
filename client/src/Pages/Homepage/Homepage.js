import React from "react";
import ImageCaraousel from "../../Components/ImageCaraousel/ImageCarousel";
import Footer from "../../Components/Footer/Footer";
import AboutUs from "../../Components/AboutUs/AboutUs";

function Homepage() {
  return (
    // <<<<<<< frontend-dheeraj
    <div className="Homepage">
      {/* ======= */}
      {/* // <div className="Homepage"> */}
      {/* // <Navbar></Navbar> */}
      {/* // // >>>>>>> main */}
      <ImageCaraousel></ImageCaraousel>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
}

export default Homepage;
