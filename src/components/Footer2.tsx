import { FunctionComponent } from "react";
import styles from "./Footer2.module.css";

const Footer2: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.lineParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.contactWrapper}>
              <div className={styles.contact}>CONTACT</div>
            </div>
            <div className={styles.termsOfServices}>TERMS OF SERVICES</div>
            <div className={styles.shippingAndReturns}>
              SHIPPING AND RETURNS
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.giveAnEmailGetTheNewsletParent}>
                <div className={styles.giveAnEmailContainer}>
                  <span>{`Give `}</span>
                  <span className={styles.anEmailGet}>
                    an email, get the newsletter.
                  </span>
                </div>
                <div className={styles.iconColorWrapper}>
                  <img
                    className={styles.iconColor}
                    alt=""
                    src="/icon-color-2.svg"
                  />
                </div>
              </div>
              <div className={styles.frameItem} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerInner}>
        <div className={styles.frameInner} />
      </div>
      <div className={styles.shellyTermsOfUseAndPrivaParent}>
        <div className={styles.shellyTermsOfContainer}>
          <span>© 2021 Shelly.</span>
          <span className={styles.termsOfUse}>{` Terms of use `}</span>
          <span>and</span>
          <span className={styles.privacyPolicy}> privacy policy.</span>
        </div>
        <div className={styles.iconColorParent}>
          <img
            className={styles.iconColor1}
            loading="lazy"
            alt=""
            src="/icon-color-3.svg"
          />
          <img
            className={styles.iconColor2}
            loading="lazy"
            alt=""
            src="/icon-color-4.svg"
          />
          <div className={styles.footerLogo}>
            <img
              className={styles.iconColor3}
              loading="lazy"
              alt=""
              src="/icon-color-5.svg"
            />
          </div>
          <div className={styles.subscribe}>
            <img
              className={styles.iconColor4}
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

export default Footer2;
