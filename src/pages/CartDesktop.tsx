import { FunctionComponent } from "react";
import FrameComponent6 from "../components/FrameComponent6";
import CheckoutButton from "../components/CheckoutButton";
import Footer2 from "../components/Footer2";
import styles from "./CartDesktop.module.css";

const CartDesktop: FunctionComponent = () => {
  return (
    <div className={styles.cartDesktop}>
      <FrameComponent6 headPadding="unset" />
      <section className={styles.calculateButtonParent}>
        <div className={styles.calculateButton}>
          <h1 className={styles.title}>Shopping Cart</h1>
        </div>
        <CheckoutButton />
      </section>
      <Footer2 />
    </div>
  );
};

export default CartDesktop;
