import { FunctionComponent } from "react";
import FrameComponent7 from "./FrameComponent7";
import FrameComponent8 from "./FrameComponent8";
import styles from "./CheckoutButton.module.css";

const CheckoutButton: FunctionComponent = () => {
  return (
    <div className={styles.checkoutButton}>
      <div className={styles.termsLinkParent}>
        <div className={styles.termsLink}>
          <div className={styles.newsletterFormWrapper}>
            <div className={styles.newsletterForm}>
              <img
                className={styles.img01Icon}
                loading="lazy"
                alt=""
                src="/img-012@2x.png"
              />
              <div className={styles.titleParent}>
                <div className={styles.title}>Lira Earrings</div>
                <div className={styles.frameWrapper}>
                  <div className={styles.desParent}>
                    <div className={styles.des}>Black / Medium</div>
                    <div className={styles.input}>$ 20,00</div>
                  </div>
                </div>
              </div>
              <div className={styles.quantityParent}>
                <div className={styles.quantity}>
                  <div className={styles.quantityChild} />
                  <div className={styles.wrapper}>
                    <div className={styles.div}>-</div>
                  </div>
                  <div className={styles.input1}>3</div>
                  <div className={styles.div1}>+</div>
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
          <div className={styles.input2} />
          <FrameComponent7
            img02="/img-021@2x.png"
            ollieEarrings="Ollie Earrings"
          />
          <div className={styles.input3} />
          <FrameComponent7
            img02="/img-03@2x.png"
            ollieEarrings="Kaede Hair Pin"
            propDisplay="unset"
            propMinWidth="unset"
          />
          <div className={styles.input4} />
          <div className={styles.button}>
            <div className={styles.buttonChild} />
            <b className={styles.updateCart}>UPDATE CART</b>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.couponCodeParent}>
            <div className={styles.couponCode}>Coupon Code</div>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.buttonWrapper}>
            <div className={styles.button1}>
              <div className={styles.buttonItem} />
              <b className={styles.applyCoupon}>APPLY COUPON</b>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent8 />
    </div>
  );
};

export default CheckoutButton;
