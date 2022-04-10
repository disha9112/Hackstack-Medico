// Test ----------------- Importing Packages from React -------------------------

// Test -------------------------- Importing the packages from different libraray -------------------
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaDribbble } from "react-icons/fa";

// Test ---------------- Importing the styles applied on component --------------
import styles from "./FooterMedico.module.css"

// Test ----------------- Importinmg the other components -----------------------

// Test ----------------- Working on current component ----------------------------
const FooterMedico = (props) => {
    return (
        <ul className={`${props.className} ${styles["medico"]}`}>
            <div className={`${styles["medico-heading"]}`}>Medico</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <ul className={`${styles["medico-icons"]}`}>
                <li><FaTwitter></FaTwitter></li>
                <li><FaFacebookF></FaFacebookF></li>
                <li><FaLinkedinIn></FaLinkedinIn></li>
                <li><FaInstagram></FaInstagram></li>
                <li><FaDribbble></FaDribbble></li>
            </ul>

        </ul>
    );
}

// Test ------------------ Exporting the Current Component --------------------------
export default FooterMedico;