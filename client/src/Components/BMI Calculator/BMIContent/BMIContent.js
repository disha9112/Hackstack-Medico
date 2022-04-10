// Test -------------------------- Importing the pacakges from react ----------------------

// Test -------------------------- Importing the Packages ---------------------------------

// Test -------------------------- Importing the styles on the current component ----------
import styles from "./BMIContent.module.css";

// Test -------------------------- Importing the other components -------------------------

// Test -------------------------- The current component ----------------------------------
const BMIContent = (props) => {
    let { children, heading, type, isHeadingPresent } = props;

    // Different types of number for the type of list
    // 1 ----> Only paragraph
    // 2 ----> Only bullet points

    return (
        <div className={`${styles["content-container"]}`}>
            <div className={`${styles["heading"]} ${!isHeadingPresent && styles["dont-show"]}`}>{heading}</div>

            <p className={`${type !== "1" ? styles["dont-show"] : styles["show"]}`}>{children}</p>

            <ul className={`${styles["content-container-ul"]} ${type !== "2" ? styles["dont-show"] : styles["show"]}`}>
                <li>
                    {children}
                </li>
            </ul>

        </div>
    );
}

// Test -------------------------- Exporting the current component ------------------------
export default BMIContent;