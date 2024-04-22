import { FunctionComponent } from "react";
import styles from "./FrameComponent8.module.css";

const FrameComponent8: FunctionComponent = () => {
  return (
    <div className={styles.cartFooter}>
      <div className={styles.frame} />
      <div className={styles.cartTotals}>
        <h2 className={styles.cartTotals1}>Cart totals</h2>
      </div>
      <div className={styles.subtotalShipping}>
        <div className={styles.countryCityPostcodeSel}>
          <div className={styles.subtotal}>
            <p className={styles.subtotal1}>SUBTOTAL</p>
            <p className={styles.blankLine}>&nbsp;</p>
          </div>
          <div className={styles.shipping}>
            <p className={styles.shipping1}>
              <span>SHIPPING</span>
              <span className={styles.span}>{`  `}</span>
            </p>
          </div>
        </div>
        <div className={styles.updateTotalsBtn}>
          <div className={styles.footer}>
            <div className={styles.termsOfServicesContainer}>
              <p className={styles.p}>$ 65,00</p>
              <p className={styles.p1}>{` `}</p>
            </div>
            <div className={styles.shippingCostsWillContainer}>
              <p className={styles.shippingCostsWill}>
                Shipping costs will be calculated once you have provided
                address.
              </p>
            </div>
          </div>
          <form className={styles.contact}>
            <div className={styles.shoppingCartIcon}>
              <div className={styles.calculateShipping}>CALCULATE SHIPPING</div>
              <div className={styles.proceedToCheckoutBtn}>
                <img
                  className={styles.iconColor}
                  loading="lazy"
                  alt=""
                  src="/icon-color-22.svg"
                />
              </div>
            </div>
            <div className={styles.countryCitySelector}>
              <div className={styles.iconColor1}>
                <div className={styles.selectACountry}>SELECT A COUNTRY</div>
                <div className={styles.iconColorWrapper}>
                  <img
                    className={styles.iconColor2}
                    alt=""
                    src="/icon-color-31.svg"
                  />
                </div>
              </div>
              <div className={styles.countryCitySelectorChild} />
            </div>
            <div className={styles.countryCitySelector1}>
              <div className={styles.cityParent}>
                <div className={styles.city}>CITY</div>
                <div className={styles.iconColorContainer}>
                  <img
                    className={styles.iconColor3}
                    alt=""
                    src="/icon-color-31.svg"
                  />
                </div>
              </div>
              <div className={styles.countryCitySelectorItem} />
            </div>
            <div className={styles.countryCitySelector2}>
              <div className={styles.postCodeZipParent}>
                <div className={styles.postCode}>POST CODE / ZIP</div>
                <div className={styles.iconColorFrame}>
                  <img
                    className={styles.iconColor4}
                    alt=""
                    src="/icon-color-31.svg"
                  />
                </div>
              </div>
              <div className={styles.countryCitySelectorInner} />
            </div>
            <div className={styles.button}>
              <div className={styles.buttonChild} />
              <b className={styles.updateTotals}>UPDATE TOTALS</b>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.copyrightTerms} />
      <div className={styles.totalParent}>
        <b className={styles.total}>TOTAl</b>
        <b className={styles.total1}>$ 87,00</b>
      </div>
      <div className={styles.button1}>
        <div className={styles.buttonItem} />
        <b className={styles.proceedToCheckout}>PROCEED TO CHECKOUT</b>
      </div>
    </div>
  );
};

export default FrameComponent8;
