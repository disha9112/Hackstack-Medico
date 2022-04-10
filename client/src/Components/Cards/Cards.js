// Test -------------------------- Importing the pacakges from react ----------------------

// Test -------------------------- Importing the Packages ---------------------------------

// Test -------------------------- Importing the styles on the current component ----------
import styles from "./Cards.module.css";

// Test -------------------------- Importing the other components -------------------------

// Test -------------------------- The current component ----------------------------------
const Cards = (props) => {
    let { image, heading, children, className } = props;

    return (
        <div className={`${styles["card-container"]} ${className}`}>
            <div className={`${styles["bar"]}`}></div>

            <div className={`${styles["image-container"]}`}>
                {image}
            </div>

            <div className={`${styles["content-container"]}`}>
                <div className={`${styles["content-heading"]}`}>{heading}</div>
                <div className={`${styles["content"]}`}>{children}</div>
            </div>

        </div>
    );
}

// Test -------------------------- Exporting the current component ------------------------
export default Cards;