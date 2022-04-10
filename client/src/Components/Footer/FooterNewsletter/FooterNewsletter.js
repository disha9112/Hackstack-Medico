// Test ----------------- Importing Packages from React -------------------------

// Test ---------------- Importing the styles applied on component --------------
import styles from "./FooterNewsletter.module.css";

// Test ----------------- Importinmg the other components -----------------------
import LabelInput from "../../LabelInput/LabelInput";
import Button from "../../Button/Button";
import SendIcon from "@material-ui/icons/Send";

// Test ----------------- Working on current component ----------------------------
const FooterNewsletter = (props) => {
  return (
    <ul className={`${props.className} ${styles["newsletter"]}`}>
      <div className={`${styles["newsletter-heading"]}`}>Newsletter</div>
      <p>Notified first for our products samples, coupons and latest news</p>

      <div className={`${styles["newsletter-input-button"]}`}>
        <input
          type="text"
          id="newsletter-email"
          name="newsletter-email"
          placeholder="Enter your email"
        ></input>
        <Button>
          <SendIcon />
          
        </Button>
      </div>
    </ul>
  );
};

// Test ------------------ Exporting the Current Component --------------------------
export default FooterNewsletter;
