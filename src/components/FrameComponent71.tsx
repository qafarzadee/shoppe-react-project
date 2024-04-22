import { FunctionComponent } from "react";
import styles from "./FrameComponent71.module.css";

const FrameComponent7: FunctionComponent = () => {
  return (
    <header className={styles.headParent}>
      <div className={styles.head}>
        <h2 className={styles.shoppe}>
          <span>S</span>
          <span className={styles.hoppe}>HOPPE</span>
        </h2>
        <div className={styles.headInner}>
          <div className={styles.menuParent}>
            <div className={styles.menu}>
              <div className={styles.shopWrapper}>
                <div className={styles.shop}>Shop</div>
              </div>
              <div className={styles.blogWrapper}>
                <div className={styles.blog}>Blog</div>
              </div>
              <div className={styles.ourStory}>Our Story</div>
              <div className={styles.menuInner}>
                <div className={styles.frameChild} />
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent}>
                <div className={styles.iconColorWrapper}>
                  <img
                    className={styles.iconColor}
                    loading="lazy"
                    alt=""
                    src="/icon-color1.svg"
                  />
                </div>
                <div className={styles.shoppingCart1Wrapper}>
                  <img
                    className={styles.shoppingCart1Icon}
                    loading="lazy"
                    alt=""
                    src="/shoppingcart-1.svg"
                  />
                </div>
                <img
                  className={styles.iconColor1}
                  loading="lazy"
                  alt=""
                  src="/icon-color-11.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.selectionLineIcon}
        loading="lazy"
        alt=""
        src="/selection-line.svg"
      />
    </header>
  );
};

export default FrameComponent7;
