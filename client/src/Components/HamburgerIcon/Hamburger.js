// Test -------------------------- Importing the pacakges from react ----------------------

// Test -------------------------- Importing the Packages ---------------------------------

// Test -------------------------- Importing the styles on the current component ----------
import styles from "./Hamburger.module.css";

// Test -------------------------- Importing the other components -------------------------

// Test -------------------------- The current component ----------------------------------
const Hamburger = () => {
    return (
        <div className={`${styles["hamburger-container"]}`}>
            <div className={`${styles["line"]}`}></div>
            <div className={`${styles["line"]}`}></div>
            <div className={`${styles["line"]}`}></div>
        </div>
    );
}

// Test -------------------------- Exporting the current component ------------------------
export default Hamburger;