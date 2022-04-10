// Test -------------------- Import Packages from react ------------------------

// Test ------------------- Import Packages -----------------------------------

// Test -------------------- Styling on the current component ------------------
import styles from "./ImageCaraouselComponent.module.css";

// Test -------------------- Import Other components --------------------------
import Button from "../../Button/Button";
import { Link } from "react-router-dom";

// Test -------------------- Working on current component ----------------------
const ImageCaraouselComponent = (props) => {
    let { image, isButtonThere, second, className } = props;

    return (
        <div className={`${styles["image-caraousel-container"]} ${className}`}>

            <div className={`${styles["image-caraousel"]}`}>

                <div className={`${second ? styles["image-container"] : styles["no-image-container"]}`}>
                    {image}
                </div>

                <div className={`${styles["content-container"]}`}>
                    <div className={`${styles["content"]}`}>
                        <p>{props.children}</p>
                    </div>

                    <div className={`${isButtonThere === true ? styles["button"] : styles["no-button"]}`}>
                        <Link to="/registerDoctor">
                            <Button isReverse={true}>Doctor</Button>
                        </Link>
                        
                        <Link to="/registerPatient">
                            <Button>Patient</Button>
                        </Link>
                    </div>
                </div>

                <div className={`${!second ? styles["image-container"] : styles["no-image-container"]}`}>
                    {image}
                </div>

            </div>

        </div>
    );
}

// Test -------------------- Exporting the current component -------------------
export default ImageCaraouselComponent;