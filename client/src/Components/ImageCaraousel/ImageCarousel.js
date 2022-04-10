// Test ----------------- Importing the Packages from React ---------------------------
import { useState } from "react";

// Test ---------------- Importing the Packages ---------------------------------------

// Test ---------------- Applying styling on component --------------------------------
import styles from "./ImageCaraousel.module.css";

// Test ---------------- Importing other componentes ----------------------------------
import ImageCaraouselComponent from "./ImageCaraouselComponent/ImageCaraouselComponent";
import ImageCaraouselDots from "./ImageCaraouselDots/ImageCaraouselDots";

// Test ----------------- Our current component ---------------------------------------
const ImageCarousel = () => {
  let imagesLink = [],
    imageCaraouselDotsIndex = [];
  let imagesPathPre = "images/ImageCaraousel/";

  let visibleCaraouselArray = [true, false, false];
  const [visibleCaraousel, setvisibleCaraousel] = useState(
    visibleCaraouselArray
  );

  for (let i = 1; i <= 3; i++) {
    imagesLink.push(imagesPathPre + `${i}.png`);
    imageCaraouselDotsIndex.push(i);
  }

  let imageComponent = imagesLink.map((eachElement) => (
    <img
      className={`${styles["images"]}`}
      src={eachElement}
      alt="Hmm"
      key={eachElement}
    ></img>
  ));

  const getCurrentDot = (dotIndex) => {
    let new_visibleCaraousel = [...visibleCaraousel];

    for (let i = 0; i < new_visibleCaraousel.length; i++) {
      new_visibleCaraousel[i] = false;
    }

    new_visibleCaraousel[dotIndex - 1] = true;
    setvisibleCaraousel(new_visibleCaraousel);

    // console.log(new_visibleCaraousel);
  };

  let imageCaraouselDots = imageCaraouselDotsIndex.map((eachElement) => (
    <ImageCaraouselDots
      index={eachElement}
      key={eachElement}
      onClick={getCurrentDot}
    ></ImageCaraouselDots>
  ));

  return (
    <div className={`${styles["image-caraousel-container"]}`}>
      <ImageCaraouselComponent
        image={imageComponent[0]}
        isButtonThere={true}
        className={
          !visibleCaraousel[0] && styles["dont-display-image-caraousel"]
        }
        heading="Connecting doctors and patients at one place"
      >
        With the growing advent of cutting edge technology tools,
        Medico has been built with an aim of connecting the healthcare sector
        far and wide, digitally
      </ImageCaraouselComponent>

      <ImageCaraouselComponent
        image={imageComponent[1]}
        second={true}
        className={
          !visibleCaraousel[1] && styles["dont-display-image-caraousel"]
        }
        heading="Tell your symptoms and get prescribed from certified doctors"
      >
        At Medico, we remain strongly devoted to the needs of patients and
        doctors across the globe. We build the bridge to facilitate such
        communications, at the comfort of your homes, in just a few clicks
      </ImageCaraouselComponent>

      <ImageCaraouselComponent
        image={imageComponent[2]}
        className={
          !visibleCaraousel[2] && styles["dont-display-image-caraousel"]
        }
        heading="Get paperless prescriptions, avoid wastage of paper"
      >
        We are extremely committed towards the preservation of environment,
        hence transforming the global medical sector network to digital
        platforms is the need of the hour which Medico achieves
      </ImageCaraouselComponent>

      <div className={`${styles["image-caraousel-dots"]}`}>
        {imageCaraouselDots}
      </div>
    </div>
  );
};

// Test ----------------- Exporting our current component -----------------------------
export default ImageCarousel;
