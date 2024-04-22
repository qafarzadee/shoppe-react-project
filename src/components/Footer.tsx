import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.termsServicesTitle}>
        <div className={styles.termsServicesTitleChild} />
        <div className={styles.contactInstance}>
          <div className={styles.giveEmailNewsletter}>
            <div className={styles.contactWrapper}>
              <div className={styles.contact}>CONTACT</div>
            </div>
            <div className={styles.termsOfServices}>TERMS OF SERVICES</div>
            <div className={styles.shippingAndReturns}>
              SHIPPING AND RETURNS
            </div>
          </div>
          <div className={styles.contactInstanceInner}>
            <div className={styles.additionalInfoInstanceParent}>
              <div className={styles.additionalInfoInstance}>
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
              <div className={styles.kaedeHairPinSetInstance} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.additionalInfoReviews}>
        <div className={styles.descriptionTitle} />
      </div>
      <div className={styles.slidingImageContainer}>
        <div className={styles.shellyTermsOfContainer}>
          <span>{`© 2021 Shelly. `}</span>
          <span className={styles.termsOfUse}>{`Terms of use `}</span>
          <span>and</span>
          <span className={styles.privacyPolicy}> privacy policy.</span>
        </div>
        <div className={styles.iconColorParent}>
          <img className={styles.iconColor1} alt="" src="/icon-color-3.svg" />
          <img className={styles.iconColor2} alt="" src="/icon-color-4.svg" />
          <div className={styles.bestSellersInstance}>
            <img className={styles.iconColor3} alt="" src="/icon-color-5.svg" />
          </div>
          <div className={styles.categoriesContainer}>
            <img className={styles.iconColor4} alt="" src="/icon-color-6.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
