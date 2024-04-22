import { FunctionComponent } from "react";
import styles from "./FrameComponent12.module.css";

const FrameComponent12: FunctionComponent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.img04Parent}>
        <img
          className={styles.img04Icon}
          loading="lazy"
          alt=""
          src="/img-04-1@2x.png"
        />
        <div className={styles.hairPinSetOf3Parent}>
          <div className={styles.hairPinSet}>Hair Pin Set of 3</div>
          <div className={styles.div}>$ 30,00</div>
        </div>
      </div>
      <div className={styles.img05Parent}>
        <img
          className={styles.img05Icon}
          loading="lazy"
          alt=""
          src="/img-05@2x.png"
        />
        <div className={styles.plaineNecklaceParent}>
          <div className={styles.plaineNecklace}>Plaine Necklace</div>
          <div className={styles.div1}>$ 19,00</div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.img07Parent}>
          <img className={styles.img07Icon} alt="" src="/img-07@2x.png" />
          <div className={styles.hover}>
            <div className={styles.hoverChild} />
            <b className={styles.addToCart}>ADD TO CART</b>
          </div>
        </div>
        <div className={styles.yukiHairPinSetOf3Parent}>
          <div className={styles.yukiHairPin}>Yuki Hair Pin Set of 3</div>
          <div className={styles.div2}>$ 29,00</div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent12;
