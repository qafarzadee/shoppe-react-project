import { FunctionComponent } from "react";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent12 from "../components/FrameComponent12";
import Footer4 from "../components/Footer4";
import styles from "./HomeDesktop.module.css";

const HomeDesktop: FunctionComponent = () => {
  return (
    <div className={styles.homeDesktop}>
      <main className={styles.frameParent}>
        <FrameComponent10 />
        <FrameComponent11 />
        <FrameComponent12 />
      </main>
      <Footer4 />
    </div>
  );
};

export default HomeDesktop;
