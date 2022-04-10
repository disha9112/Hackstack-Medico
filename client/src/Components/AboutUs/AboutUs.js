// Test -------------------------- Importing the pacakges from react ----------------------

// Test -------------------------- Importing the Packages ---------------------------------

// Test -------------------------- Importing the styles on the current component ----------
import styles from "./AboutUs.module.css";

// Test -------------------------- Importing the other components -------------------------
import Cards from "../Cards/Cards";

// Test -------------------------- The current component ----------------------------------
const AboutUs = () => {
    let imagePrePath = "images/Cards/", imagesLink = [];

    for (let i = 1; i <= 6; i++)
        imagesLink.push(imagePrePath + `${i}.png`);

    let imageComponent = imagesLink.map((eachElement) => <img src={eachElement} alt="Images" key={eachElement}></img>)

    console.log(imagesLink);

    return (
        <div className="about-us-container-full">
            <div className={`${styles["heading"]}`} id="about">About Us</div>

            <div className={`${styles["about-us-container"]}`}>

                <Cards image={imageComponent[0]} heading="Paperless">As a sector that strives to establish a healthy world, digitalization or the paperless operations system in healthcare industry is a necessity than a need.</Cards>

                <Cards image={imageComponent[1]} heading="Biometric">Healthcare biometrics allow users to access applications and patient data quickly - clinicians simply touch a fingerprint scanner and get instant access to the records they need on any workstation.</Cards>

                <Cards image={imageComponent[2]} heading="Appointment">For your first visit to hospital, registration and appointment with doctor is made simpler. All you have to do is verify yourself using ID, and view all your recent and previous appointments .</Cards>

                <Cards image={imageComponent[3]} heading="Self Care">In healthcare, self-care is any necessary human regulatory function which is under individual control, deliberate and self-initiated</Cards>

                <Cards image={imageComponent[4]} heading="Data Privacy">Patient privacy is your right to decide when, how, and to what extent others may access your health information. Patient privacy maintains confidentiality and only shares PHI with those who need it to provide or improve medical care.</Cards>

                <Cards image={imageComponent[5]} heading="Updates">We keep the patients profile up to date for ease . Appointments and Prescription data is updated as per the visits .</Cards>
            </div>
        </div>

    );
}

// Test -------------------------- Exporting the current component ------------------------
export default AboutUs;