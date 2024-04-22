import { FunctionComponent } from "react";
import styles from "./Footer1.module.css";

const Footer1: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.lineParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
          <div className={styles.termsAndConditionsParent}>
            <div className={styles.termsAndConditions}>
              <div className={styles.contact}>CONTACT</div>
            </div>
            <div className={styles.termsOfServices}>TERMS OF SERVICES</div>
            <div className={styles.shippingAndReturns}>
              SHIPPING AND RETURNS
            </div>
          </div>
          <div className={styles.newsletterSubscriptionWrapper}>
            <div className={styles.newsletterSubscription}>
              <div className={styles.emailIcon}>
                <div className={styles.giveAnEmailContainer}>
                  {`Give `}
                  <span className={styles.anEmailGet}>
                    an email, get the newsletter.
                  </span>
                </div>
                <div className={styles.copyrightIcon}>
                  <img
                    className={styles.iconColor}
                    alt=""
                    src="/icon-color-2.svg"
                  />
                </div>
              </div>
              <div className={styles.newsletterSubscriptionChild} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.termsOfUseWrapper}>
        <div className={styles.termsOfUse} />
      </div>
      <div className={styles.privacyPolicy}>
        <div className={styles.shellyTermsOfContainer}>
          <span>© 2021 Shelly.</span>
          <span className={styles.termsOfUse1}>{` Terms of use `}</span>
          <span>and</span>
          <span className={styles.privacyPolicy1}> privacy policy.</span>
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
          <div className={styles.iconColorWrapper}>
            <img
              className={styles.iconColor3}
              loading="lazy"
              alt=""
              src="/icon-color-5.svg"
            />
          </div>
          <div className={styles.iconColorContainer}>
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

export default Footer1;
