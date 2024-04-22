import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent7.module.css";

export type FrameComponent7Type = {
  img02?: string;
  ollieEarrings?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  img02,
  ollieEarrings,
  propDisplay,
  propMinWidth,
}) => {
  const ollieEarrings1Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={styles.termsLinkInner}>
      <div className={styles.img02Parent}>
        <img className={styles.img02Icon} loading="lazy" alt="" src={img02} />
        <div className={styles.ollieEarringsParent}>
          <div className={styles.ollieEarrings} style={ollieEarrings1Style}>
            {ollieEarrings}
          </div>
          <div className={styles.desParent}>
            <div className={styles.des}>Black / Medium</div>
            <div className={styles.div}>$ 20,00</div>
          </div>
        </div>
        <div className={styles.quantityParent}>
          <div className={styles.quantity}>
            <div className={styles.quantityChild} />
            <div className={styles.div1}>-</div>
            <div className={styles.div2}>1</div>
            <div className={styles.div3}>+</div>
          </div>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
