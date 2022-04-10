// Test -------------------- Importing the Packages from React ----------------------------

// Test -------------------- Importing the styles applied on Component --------------------
import styles from "./LabelInput.module.css";

// Test -------------------- Importing the other component used here ----------------------

// Test -------------------- The current component being applied here ---------------------
const LabelInput = (props) => {

    let { type, value, id, name, onChange, children, error, className } = props;

    const changeUserValue = (event) => {
        // console.log(event.target.value);
        if (isNaN(event.target.value))
            onChange(event.target.value);
    }

    return (
        <div className={`${styles["label-input"]} ${type == "number" ? styles["horizontal"] : styles["vertical"]} ${className}`}>
            <label htmlFor={id}> {children} </label>
            <input type={type} id={id} name={name} onChange={changeUserValue} value={value} autoComplete="on"></input>
            <div className={`${styles["error"]}`}>{error}</div>
        </div>
    );
}

// Test -------------------- Exporting the current component ------------------------------
export default LabelInput;