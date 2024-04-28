import { FunctionComponent } from "react";
import styles from "./FrameComponent10.module.css";
import { Link } from "react-router-dom";

const FrameComponent10: FunctionComponent = () => {
  return (
    <section className={styles.headParent}>
      <header className={styles.head}>
        <h2 className={styles.shoppe}>
          <span>S</span>
          <span className={styles.hoppe}>HOPPE</span>
        </h2>
        <div className={styles.headInner}>
          <div className={styles.menuParent}>
            <div className={styles.menu}>
              <div className={styles.shopWrapper}>
                <div className={styles.shop}>
                  <Link to={"/shop"}>Shop</Link>
                </div>
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
                    src="/icon-color.svg"
                  />
                </div>
                <div className={styles.shoppingCart1Wrapper}>
                  <Link to={"/cart"}>
                    <img
                      className={styles.shoppingCart1Icon}
                      loading="lazy"
                      alt=""
                      src="/shoppingcart-1.svg"
                    />
                  </Link>
                </div>
                <img
                  className={styles.iconColor1}
                  loading="lazy"
                  alt=""
                  src="/icon-color-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.header}>
        <img className={styles.img01Icon} alt="" src="/img-01@2x.png" />
        <div className={styles.headerInner}>
          <div className={styles.frameGroup}>
            <div className={styles.goldBigHoopsParent}>
              <h2 className={styles.goldBigHoops}>{`Gold big hoops `}</h2>
              <div className={styles.div}>$ 68,00</div>
            </div>
            <div className={styles.button01}>
              <div className={styles.button01Child} />
              <b className={styles.viewProduct}>
                <span className={styles.v}>v</span>
                <span className={styles.iew}>{`IEW `}</span>
                <span className={styles.p}>p</span>
                <span className={styles.roduct}>RODUCT</span>
              </b>
            </div>
          </div>
        </div>
        <img
          className={styles.sliderIcon}
          loading="lazy"
          alt=""
          src="/slider.svg"
        />
      </div>
    </section>
  );
};

export default FrameComponent10;
