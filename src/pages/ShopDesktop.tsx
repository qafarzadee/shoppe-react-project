import { FunctionComponent } from "react";
import FrameComponent7 from "../components/FrameComponent7";
import Footer3 from "../components/Footer3";
import styles from "./ShopDesktop.module.css";

const ShopDesktop: FunctionComponent = () => {
  return (
    <div className={styles.shopDesktop}>
      <FrameComponent7 />
      <section className={styles.titleParent}>
        <h2 className={styles.title}>Shop The Latest</h2>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameParent2}>
                      <div className={styles.searchWrapper}>
                        <div className={styles.search}>Search...</div>
                      </div>
                      <img
                        className={styles.iconColor}
                        alt=""
                        src="/icon-color-23.svg"
                      />
                    </div>
                    <div className={styles.lastName} />
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.shopByParent}>
                      <div className={styles.shopBy}>Shop By</div>
                      <div className={styles.frameChild} />
                      <div className={styles.iconColorWrapper}>
                        <img
                          className={styles.iconColor1}
                          alt=""
                          src="/icon-color-32.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.sortByParent}>
                      <div className={styles.sortBy}>Sort By</div>
                      <div className={styles.frameItem} />
                      <div className={styles.iconColorContainer}>
                        <img
                          className={styles.iconColor2}
                          alt=""
                          src="/icon-color-32.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.priceLineParent}>
                    <img
                      className={styles.priceLineIcon}
                      loading="lazy"
                      alt=""
                      src="/price-line.svg"
                    />
                    <div className={styles.price40180Parent}>
                      <div className={styles.price40}>Price: $40 - $180</div>
                      <div className={styles.filter}>Filter</div>
                    </div>
                  </div>
                  <div className={styles.onSaleParent}>
                    <div className={styles.onSale}>On sale</div>
                    <div className={styles.iconColorFrame}>
                      <img
                        className={styles.iconColor3}
                        loading="lazy"
                        alt=""
                        src="/icon-color-51.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.inStockParent}>
                    <div className={styles.inStock}>In stock</div>
                    <div className={styles.iconColorWrapper1}>
                      <img
                        className={styles.iconColor4}
                        loading="lazy"
                        alt=""
                        src="/icon-color-51.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent4}>
                  <div className={styles.img01Parent}>
                    <img
                      className={styles.img01Icon}
                      alt=""
                      src="/img-01@2x.png"
                    />
                    <div className={styles.sale}>
                      <div className={styles.saleChild} />
                      <div className={styles.div}>- %21</div>
                    </div>
                  </div>
                  <div className={styles.liraEarringsParent}>
                    <div className={styles.liraEarrings}>Lira Earrings</div>
                    <div className={styles.div1}>$ 20,00</div>
                  </div>
                </div>
              </div>
              <div className={styles.img02Parent}>
                <img
                  className={styles.img02Icon}
                  loading="lazy"
                  alt=""
                  src="/img-022@2x.png"
                />
                <div className={styles.halEarringsParent}>
                  <div className={styles.halEarrings}>Hal Earrings</div>
                  <div className={styles.add}>$ 25,00</div>
                </div>
              </div>
              <div className={styles.img04Parent}>
                <img
                  className={styles.img04Icon}
                  loading="lazy"
                  alt=""
                  src="/img-041@2x.png"
                />
                <div className={styles.kaedeHairPinSetOf3Parent}>
                  <div className={styles.kaedeHairPin}>
                    Kaede Hair Pin Set Of 3
                  </div>
                  <div className={styles.div2}>$ 30,00</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.img04Group}>
                <img
                  className={styles.img04Icon1}
                  loading="lazy"
                  alt=""
                  src="/img-04-11@2x.png"
                />
                <div className={styles.hairPinSetOf3Parent}>
                  <div className={styles.hairPinSet}>Hair Pin Set of 3</div>
                  <div className={styles.div3}>$ 30,00</div>
                </div>
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.img05Parent}>
                  <img
                    className={styles.img05Icon}
                    alt=""
                    src="/img-05@2x.png"
                  />
                  <div className={styles.sale1}>
                    <div className={styles.saleItem} />
                    <div className={styles.soldOut}>Sold out</div>
                  </div>
                </div>
                <div className={styles.plaineNecklaceParent}>
                  <div className={styles.plaineNecklace}>Plaine Necklace</div>
                  <div className={styles.div4}>$ 19,00</div>
                </div>
              </div>
              <div className={styles.img07Parent}>
                <img
                  className={styles.img07Icon}
                  loading="lazy"
                  alt=""
                  src="/img-07@2x.png"
                />
                <div className={styles.yukiHairPinSetOf3Parent}>
                  <div className={styles.yukiHairPin}>
                    Yuki Hair Pin Set of 3
                  </div>
                  <div className={styles.whatIsYour}>$ 29,00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer3 />
    </div>
  );
};

export default ShopDesktop;
