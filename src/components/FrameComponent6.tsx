import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Type = {
  /** Style props */
  headPadding?: CSSProperties["padding"];
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  headPadding,
}) => {
  const frameHeaderStyle: CSSProperties = useMemo(() => {
    return {
      padding: headPadding,
    };
  }, [headPadding]);

  return (
    <header className={styles.headParent} style={frameHeaderStyle}>
      <div className={styles.head}>
        <h1 className={styles.shoppe}>
          <span>S</span>
          <span className={styles.hoppe}>HOPPE</span>
        </h1>
        <div className={styles.headInner}>
          <div className={styles.menuParent}>
            <div className={styles.menu}>
              <div className={styles.emailInput}>
                <div className={styles.shop}>Shop</div>
              </div>
              <div className={styles.emailInput1}>
                <div className={styles.blog}>Blog</div>
              </div>
              <div className={styles.ourStory}>Our Story</div>
              <div className={styles.menuInner}>
                <div className={styles.frameChild} />
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.shoppingCartIconParent}>
                <div className={styles.shoppingCartIcon}>
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
      <div className={styles.frameItem} />
    </header>
  );
};

export default FrameComponent6;
