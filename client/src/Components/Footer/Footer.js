// Test -------------------------- Importing the packages from react ---------------------------------

// Test -------------------------- Importing the styles to be applied on this component -------------
import styles from "./Footer.module.css";

// Test -------------------------- Importing the other component used in here -----------------------
import FooterAbout from "./FooterAbout/FooterAbout";
import FooterMedico from "./FooterMedico/FooterMedico";
import FooterNavigation from "./FooterNavigation/FooterNavigation";
import FooterNewsletter from "./FooterNewsletter/FooterNewsletter";

// Test -------------------------- Mainitaining our current component ------------------------------
const Footer = () => {

    return (
        <footer>

            <footer className={`${styles["footer-main-content"]}`}>
                
                <div className={`${styles["footer-main-content-left"]}`}>
                    <FooterMedico className={`${styles["footer-main-content-flex-items"]}`}></FooterMedico>
                </div>

                <div className={`${styles["footer-main-content-right"]}`}>
                    <FooterNavigation className={`${styles["footer-main-content-flex-items"]}`}></FooterNavigation>
                    <FooterAbout className={`${styles["footer-main-content-flex-items"]}`}></FooterAbout>
                    <FooterNewsletter className={`${styles["footer-main-content-flex-items"]}`}></FooterNewsletter>
                </div>

            </footer>

            <footer className={`${styles["footer-side-content"]}`}>
                <div></div>
                <p>© 2022 Medico All Rights Reserved</p>
            </footer>

        </footer>
    );
}

// Test --------------------------- Exporting the Footer Component ---------------------------------
export default Footer;