// Test ----------------- Importing Packages from React -------------------------

// Test ---------------- Importing the styles applied on component --------------
import styles from "./FooterAbout.module.css";

// Test ----------------- Importinmg the other components -----------------------

// Test ----------------- Working on current component ----------------------------
const FooterAbout = (props) => {
    return (
        <ul className={`${props.className} ${styles["about"]}`}>
            <div className={`${styles["about-heading"]}`}>About</div>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
            <li>Membership</li>
            <li>Terms and Conditions</li>
        </ul>
    );
}

// Test ------------------ Exporting the Current Component --------------------------
export default FooterAbout;