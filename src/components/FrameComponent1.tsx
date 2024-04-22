import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  img01?: string;
  ollieEarrings?: string;
  prop?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  img01,
  ollieEarrings,
  prop,
  propMinWidth,
  propDisplay,
}) => {
  const ollieEarringsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      display: propDisplay,
    };
  }, [propMinWidth, propDisplay]);

  return (
    <div className={styles.img01Parent}>
      <img className={styles.img01Icon} alt="" src={img01} />
      <div className={styles.ollieEarringsParent}>
        <div className={styles.ollieEarrings} style={ollieEarringsStyle}>
          {ollieEarrings}
        </div>
        <div className={styles.emptySpace}>{prop}</div>
      </div>
    </div>
  );
};

export default FrameComponent1;
