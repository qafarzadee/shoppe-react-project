import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <div className={styles.loadingIndicator}>
      <img
        className={styles.sliderIcon}
        loading="lazy"
        alt=""
        src="/slider1.svg"
      />
      <div className={styles.frameParent}>
        <div className={styles.paginationInstanceWrapper}>
          <div className={styles.paginationInstance}>
            <h2 className={styles.liraEarrings}>Lira Earrings</h2>
            <div className={styles.empty}>$ 20,00</div>
          </div>
        </div>
        <div className={styles.productImage}>
          <div className={styles.slider}>
            <div className={styles.productName}>
              <div className={styles.sKU}>
                <div className={styles.categories}>
                  <div className={styles.iconColor}>
                    <img
                      className={styles.star11}
                      loading="lazy"
                      alt=""
                      src="/star-1-1.svg"
                    />
                    <img
                      className={styles.star14}
                      loading="lazy"
                      alt=""
                      src="/star-1-1.svg"
                    />
                    <img
                      className={styles.star15}
                      loading="lazy"
                      alt=""
                      src="/star-1-1.svg"
                    />
                    <img
                      className={styles.star151}
                      alt=""
                      src="/star-1-1.svg"
                    />
                    <img className={styles.star16} alt="" src="/star-1-1.svg" />
                  </div>
                </div>
                <div className={styles.customerReview}>1 customer review</div>
              </div>
              <div
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. `}</div>
            </div>
            <div className={styles.title}>
              <div className={styles.quantity}>
                <div className={styles.quantityChild} />
                <div className={styles.imageSet}>-</div>
                <div className={styles.imageSet1}>1</div>
                <div className={styles.imageSet2}>+</div>
              </div>
              <div className={styles.button}>
                <div className={styles.buttonChild} />
                <b className={styles.addToCart}>ADD TO CART</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.kaedeHairPin}>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.iconColorParent}>
                <img
                  className={styles.iconColor1}
                  alt=""
                  src="/icon-color-7.svg"
                />
                <div className={styles.frameChild} />
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.skuParent}>
                  <div className={styles.sku}>SKU:</div>
                  <div className={styles.div}>12</div>
                </div>
              </div>
              <div className={styles.categories1}>Categories:</div>
            </div>
          </div>
          <div className={styles.kaedeHairPinInner}>
            <div className={styles.frameParent1}>
              <div className={styles.iconColorGroup}>
                <img
                  className={styles.iconColor2}
                  alt=""
                  src="/icon-color-8.svg"
                />
                <img
                  className={styles.iconColor3}
                  alt=""
                  src="/icon-color-9.svg"
                />
                <img
                  className={styles.iconColor4}
                  alt=""
                  src="/icon-color-10.svg"
                />
              </div>
              <div className={styles.fashionStyleWrapper}>
                <div className={styles.fashionStyle}>Fashion, Style</div>
              </div>
            </div>
          </div>
          <div className={styles.iconColorWrapper}>
            <img
              className={styles.iconColor5}
              alt=""
              src="/icon-color-111.svg"
            />
          </div>
        </div>
      </div>
      <img
        className={styles.img01Icon}
        loading="lazy"
        alt=""
        src="/img-011@2x.png"
      />
      <div className={styles.img2Parent}>
        <img
          className={styles.img2Icon}
          loading="lazy"
          alt=""
          src="/img-2@2x.png"
        />
        <img
          className={styles.img3Icon}
          loading="lazy"
          alt=""
          src="/img-2@2x.png"
        />
        <img
          className={styles.img4Icon}
          loading="lazy"
          alt=""
          src="/img-2@2x.png"
        />
        <img
          className={styles.img5Icon}
          loading="lazy"
          alt=""
          src="/img-2@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent3;
