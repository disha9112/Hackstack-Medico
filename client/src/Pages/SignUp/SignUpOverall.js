// Test -------------------------- Importing the pacakges from react ----------------------
import { Link } from "react-router-dom";

// Test -------------------------- Importing the Packages ---------------------------------

// Test -------------------------- Importing the styles on the current component ----------
import styles from "./SignupOverall.module.css";

// Test -------------------------- Importing the other components -------------------------
import Cards from "../../Components/Cards/Cards";
import Footer from "../../Components/Footer/Footer";

// Test -------------------------- The current component ----------------------------------
const SignUpOverall = () => {
    let images = [<img src="images/Sign Up/doctor.png" alt="Sign Up"></img>, <img src="images/Sign Up/patient.png" alt="Sign Up"></img>]

    return (
        <div >
            <div className={`${styles["doctor-patient-card-container"]}`}>
                <Link to="/registerDoctor">
                    <Cards image={images[0]} heading="Doctor" className={`${styles["singup-overall-card"]}`}></Cards>
                </Link>

                <Link to="/registerPatient">
                    <Cards image={images[1]} heading="Patient" className={`${styles["singup-overall-card"]}`}></Cards>
                </Link>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
}

// Test -------------------------- Exporting the current component ------------------------
export default SignUpOverall;