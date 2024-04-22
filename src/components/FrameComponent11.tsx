import { FunctionComponent } from "react";
import styles from "./FrameComponent11.module.css";

const FrameComponent11: FunctionComponent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.titleParent}>
        <h2 className={styles.title}>Shop The Latest</h2>
        <div className={styles.viewAllWrapper}>
          <div className={styles.viewAll}>View All</div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.img01Parent}>
          <img
            className={styles.img01Icon}
            loading="lazy"
            alt=""
            src="/img-01@2x.png"
          />
          <div className={styles.liraEarringsParent}>
            <div className={styles.liraEarrings}>Lira Earrings</div>
            <div className={styles.div}>$ 20,00</div>
          </div>
        </div>
        <div className={styles.img02Parent}>
          <img
            className={styles.img02Icon}
            loading="lazy"
            alt=""
            src="/img-02@2x.png"
          />
          <div className={styles.halEarringsParent}>
            <div className={styles.halEarrings}>Hal Earrings</div>
            <div className={styles.div1}>$ 25,00</div>
          </div>
        </div>
        <div className={styles.img04Parent}>
          <img
            className={styles.img04Icon}
            loading="lazy"
            alt=""
            src="/img-04@2x.png"
          />
          <div className={styles.kaedeHairPinSetOf3Parent}>
            <div className={styles.kaedeHairPinContainer}>
              <span className={styles.kaedeHairPi}>Kaede Hair Pi</span>n
              <span className={styles.span}>{` `}</span>Set
              <span className={styles.of3}>{` Of 3 `}</span>
            </div>
            <div className={styles.div2}>$ 30,00</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent11;
