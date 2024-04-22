import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <section className={styles.contactDesktopInner}>
      <div className={styles.frameParent}>
        <div className={styles.messageParent}>
          <div className={styles.message}>Message</div>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.buttonWrapper}>
          <div className={styles.button}>
            <div className={styles.buttonChild} />
            <b className={styles.send}>SEND</b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
