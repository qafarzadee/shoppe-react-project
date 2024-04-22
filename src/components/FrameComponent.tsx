import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.title02Parent}>
      <h2 className={styles.title02}>Similar Items</h2>
      <div className={styles.frameParent}>
        <FrameComponent1
          img01="/img-01-1@2x.png"
          ollieEarrings="Ollie Earrings"
          prop="$ 30,00"
        />
        <FrameComponent1
          img01="/img-05@2x.png"
          ollieEarrings="Hal Earrings"
          prop="$ 25,00"
          propMinWidth="109px"
          propDisplay="inline-block"
        />
        <FrameComponent1
          img01="/img-04@2x.png"
          ollieEarrings="Kaede Hair Pin Set Of 3"
          prop="$ 30,00"
          propMinWidth="unset"
          propDisplay="unset"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
