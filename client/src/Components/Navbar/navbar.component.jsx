import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.css";
import {Menu} from "@material-ui/icons"

const Navbar = () => {
  const [authentication,setAuthentication]=useState(0);
  return (
    <div className="navbar">
      <div ></div>
      <Link className="navbar__title" to="/">
        Medico
      </Link>
      <div>
        <Link className="navbar__item_active" to="/about">
          About Us
        </Link>
        <Link className="navbar__item_active" to="/bmi">
          BMI Calculator
        </Link>
        <Link className="navbar__item_active" to="/contact">
          Contact
        </Link>
        <Link className={authentication?"navbar__item":"navbar__item_active"} to="/register">
          Register
        </Link>
        <Link className={authentication?"navbar__item":"navbar__item_active"} to="/login">
          Login
        </Link>
        <Link className={authentication?"navbar__item_active": "navbar__item"} to="/profile">
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
