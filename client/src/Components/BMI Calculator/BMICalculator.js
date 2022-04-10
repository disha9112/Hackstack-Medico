// Test -------------------- Importing the Packages from React ----------------------------
import { useState } from "react";

// Test -------------------- Importing the styles applied on Component --------------------
import styles from "./BMICalculator.module.css";

// Test -------------------- Importing the other component used here ----------------------
import Button from "../Button/Button";
import LabelInput from "../LabelInput/LabelInput";
import BMIChart from "./BMIChart/BMIChart";
import BMIContent from "./BMIContent/BMIContent";

// Test -------------------- The current component being applied here ---------------------
const BMICalculator = () => {
    const [bmi, setbmi] = useState(50);

    const formSubmitted = (event) => {
        event.preventDefault();
        // console.log(event);

        getValues(event.target.children);
    }

    const getValues = (searchSpace) => {
        let inputChildren = document.querySelectorAll("#bmiForm input")

        let formData = {
            height: inputChildren[0].value,
            weight: inputChildren[1].value,
        }

        // console.log(formData);
        calculateBMI(formData);
    }

    const calculateBMI = (formData) => {
        let { height, weight } = formData;
        setbmi((weight * 100 * 100) / (height * height));
        // console.log(bmi);
    }

    return (
        <div>

            <form onSubmit={formSubmitted} id="bmiForm">
                <BMIContent heading="BMI" type="1" isHeadingPresent={true}>
                    Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women
                </BMIContent>

                <div className={`${styles["fullform"]}`}>
                    <div className={`${styles["bmiform"]}`}>
                        <LabelInput id="height" name="height" type="number"> Your Height (Cm) </LabelInput>
                        <LabelInput id="weight" name="weight" type="number"> Your Weight (Kg) </LabelInput>

                        <div className={`${styles["button"]}`}>
                            <Button type="reset">Reset</Button>
                            <Button type="submit" isReverse={true}>Calculate</Button>
                        </div>
                    </div>

                    <div>
                        <BMIChart bmi={bmi}></BMIChart>
                    </div>
                </div>

                <BMIContent heading="Why Is a Healthy Weight Important?" type="2" isHeadingPresent={true}>
                    Reaching and maintaining a healthy weight is important for overall health and can help you prevent and control many diseases and conditions.
                </BMIContent>

                <BMIContent type="2">
                    If you are overweight or obese, you are at higher risk of developing serious health problems, including heart disease, high blood pressure, type 2 diabetes, gallstones, breathing problems, and certain cancers.
                </BMIContent>

                <BMIContent type="2">
                    Maintaining Healthy weight is important as it helps you lower your risk for developing these problems, helps you feel good about yourself, and gives you more energy to enjoy life.
                </BMIContent>


                <BMIContent heading="Energy Balance" type="1" isHeadingPresent={true}>Energy balance is important for maintaining a healthy weight. The amount of energy or calories you get from food and drinks (energy IN) is balanced with the energy your body uses for things like breathing, digesting, and being physically active (energy OUT):
                </BMIContent>

                <BMIContent type="2">The same amount of energy IN and energy OUT over time = weight stays the same (energy balance)</BMIContent>

                <BMIContent type="2">More energy IN than OUT over time = weight gain</BMIContent>

                <BMIContent type="2">More energy OUT than IN over time = weight loss</BMIContent>

                <BMIContent heading="You can reach and maintain a healthy weight if you" type="2" isHeadingPresent={true}>Are physically active
                </BMIContent>

                <BMIContent type="2">Limit the time you spend being physically inactive</BMIContent>

                <BMIContent type="2">Follow a healthy diet, and if you are overweight or obese, reduce your daily intake by 500 calories for weight loss</BMIContent>

            </form>

        </div>
    );
}

// Test -------------------- Exporting the current component ------------------------------
export default BMICalculator;