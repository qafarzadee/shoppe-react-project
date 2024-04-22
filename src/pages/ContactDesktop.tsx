import { FunctionComponent } from "react";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import Footer1 from "../components/Footer1";
import styles from "./ContactDesktop.module.css";

const ContactDesktop: FunctionComponent = () => {
  return (
    <div className={styles.contactDesktop}>
      <FrameComponent6 />
      <section className={styles.contactDesktopInner}>
        <div className={styles.frameParent}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>Contact Us</h1>
          </div>
          <div className={styles.sayHelloSendContainer}>
            <p className={styles.sayHelloSend}>
              Say Hello send us your thoughts about our products or share
            </p>
            <p className={styles.yourIdeasWith}>your ideas with our Team!</p>
          </div>
        </div>
      </section>
      <FrameComponent5 />
      <FrameComponent4 />
      <Footer1 />
    </div>
  );
};

export default ContactDesktop;
