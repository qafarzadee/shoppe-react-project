import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <section className={styles.contactDesktopInner}>
      <div className={styles.frameParent}>
        <div className={styles.subscribeLabelParent}>
          <div className={styles.subscribeLabel}>
            <div className={styles.firstName}>First name</div>
            <div className={styles.medication} />
          </div>
          <div className={styles.lastNameParent}>
            <div className={styles.lastName}>Last name</div>
            <div className={styles.listAllYourPreviousHealth} />
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.emailWrapper}>
              <div className={styles.email}>Email</div>
            </div>
            <div className={styles.subject}>Subject</div>
            <div className={styles.iconColorWrapper}>
              <img
                className={styles.iconColor}
                loading="lazy"
                alt=""
                src="/icon-color-21.svg"
              />
            </div>
          </div>
          <div className={styles.concernsParent}>
            <div className={styles.concerns} />
            <div className={styles.frameChild} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
