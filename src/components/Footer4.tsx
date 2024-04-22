import { FunctionComponent } from "react";
import styles from "./Footer4.module.css";

const Footer4: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.termsOfServiceAndReturnsParent}>
        <div className={styles.termsOfServiceAndReturns} />
        <div className={styles.shippingReturns}>
          <div className={styles.tosPolicy}>
            <div className={styles.footerInfo}>
              <div className={styles.contact}>CONTACT</div>
            </div>
            <div className={styles.termsOfServices}>TERMS OF SERVICES</div>
            <div className={styles.shippingAndReturns}>
              SHIPPING AND RETURNS
            </div>
          </div>
          <div className={styles.iconColor}>
            <div className={styles.addToCart}>
              <div className={styles.productImages}>
                <div className={styles.giveAnEmail}>
                  Give an email, get the newsletter.
                </div>
                <div className={styles.termsOfUse}>
                  <img
                    className={styles.iconColor1}
                    alt=""
                    src="/icon-color-2.svg"
                  />
                </div>
              </div>
              <div className={styles.addToCartChild} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyrightInfo}>
        <div className={styles.copyrightInfoChild} />
      </div>
      <div className={styles.shellyTermsOfUseAndPrivaParent}>
        <div className={styles.shellyTermsOfContainer}>
          <span>© 2021 Shelly.</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.termsOfUse1}>{`Terms of use `}</span>
          <span>and</span>
          <span className={styles.privacyPolicy}> privacy policy.</span>
        </div>
        <div className={styles.iconColorParent}>
          <img
            className={styles.iconColor2}
            loading="lazy"
            alt=""
            src="/icon-color-3.svg"
          />
          <img
            className={styles.iconColor3}
            loading="lazy"
            alt=""
            src="/icon-color-4.svg"
          />
          <div className={styles.iconColorWrapper}>
            <img
              className={styles.iconColor4}
              loading="lazy"
              alt=""
              src="/icon-color-5.svg"
            />
          </div>
          <div className={styles.footerIconColor}>
            <img
              className={styles.iconColor5}
              loading="lazy"
              alt=""
              src="/icon-color-6.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer4;
