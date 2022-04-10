// Test -------------------- Importing the Packages from React ----------------------------

// Test -------------------- Importing the styles applied on Component --------------------
import styles from "./Button.module.css";

// Test -------------------- Importing the other component used here ----------------------

// Test -------------------- The current component being applied here ---------------------
const Button = (props) => {
    let isReverse = props.isReverse;

    return (
        <button type={props.type} className={`${isReverse ? styles["button-reverse"] : styles["button"]}`}>{props.children}</button>
        
    );
}

// Test -------------------- Exporting the current component ------------------------------
export default Button;