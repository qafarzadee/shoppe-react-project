import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.descriptionParent}>
          <div className={styles.description}>Description</div>
          <div className={styles.sliderWrapper}>
            <img className={styles.sliderIcon} alt="" src="/slider-1.svg" />
          </div>
        </div>
        <div className={styles.aditionalInformation}>Aditional information</div>
        <div className={styles.reviews0}>Reviews(0)</div>
      </div>
      <div className={styles.loremIpsumDolor}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
        in molestie diam bibendum sed.
      </div>
    </div>
  );
};

export default FrameComponent2;
