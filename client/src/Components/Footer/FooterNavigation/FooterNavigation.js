// Test ----------------- Importing Packages from React -------------------------

// Test ---------------- Importing the styles applied on component --------------
import styles from "./FooterNavigation.module.css"

// Test ----------------- Importinmg the other components -----------------------

// Test ----------------- Working on current component ----------------------------
const FooterNavigation = (props) => {
    return (
        <ul className={`${props.className} ${styles["navigation"]}`}>
            <div className={`${styles["navigation-heading"]}`}>Navigation</div>
            <li>Home</li>
            <li>About Us</li>
            <li>BMI Calculator</li>
            <li>Roles</li>
            <li>Contact Us</li>
        </ul>
    );
}

// Test ------------------ Exporting the Current Component --------------------------
export default FooterNavigation;