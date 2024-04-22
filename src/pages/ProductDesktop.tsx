import { FunctionComponent } from "react";
import Footer from "../components/Footer";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";
import styles from "./ProductDesktop.module.css";

const ProductDesktop: FunctionComponent = () => {
  return (
    <div className={styles.productDesktop}>
      <img
        className={styles.selectionLineIcon}
        alt=""
        src="/selection-line.svg"
      />
      <header className={styles.head}>
        <h1 className={styles.shoppe}>
          <span>S</span>
          <span className={styles.hoppe}>HOPPE</span>
        </h1>
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
              <div className={styles.reviewsInstanceParent}>
                <div className={styles.reviewsInstance}>
                  <img
                    className={styles.iconColor}
                    loading="lazy"
                    alt=""
                    src="/icon-color1.svg"
                  />
                </div>
                <div className={styles.addToCartButton}>
                  <img
                    className={styles.shoppingCart1Icon}
                    loading="lazy"
                    alt=""
                    src="/shoppingcart-1.svg"
                  />
                </div>
                <img
                  className={styles.iconColor1}
                  alt=""
                  src="/icon-color-11.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Footer />
      <section className={styles.clearFiltersButton}>
        <FrameComponent3 />
        <FrameComponent2 />
        <FrameComponent />
      </section>
    </div>
  );
};

export default ProductDesktop;
