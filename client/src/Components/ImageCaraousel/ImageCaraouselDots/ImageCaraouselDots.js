// Test --------------- Importing the packages from React -------------------

// Test --------------- Importing the Packages ------------------------------

// Test --------------- The styling on the current component ----------------
import styles from "./ImageCaraouselDots.module.css";

// Test --------------- Other component which we are going to use -----------

// Test --------------- The current component ------------------------------
const ImageCaraouselDots = (props) => {

    let { index, onClick } = props;

    const getDotsIndex = (event) => {
        // console.log(index);
        onClick(index);
    }

    return (
        <div className={`${styles["dots"]}`} onClick={getDotsIndex}></div>
    );
}

// Test ---------------- Exporting the current component --------------------
export default ImageCaraouselDots;