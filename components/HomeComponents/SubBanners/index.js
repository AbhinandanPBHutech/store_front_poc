import React, { useLayoutEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImg1 from "../../../public/assets/sec-banner-left.png";
import BannerImg2 from "../../../public/assets/top-banner-2.svg";
import Image from "next/image";
import getWindowDimensions from "../../Constants/getWidth";

function SubBanners() {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <div className={styles.container}>
      <div id="one" className={styles.carousel_container}>
        <Slider slidesToShow={size < 700 ? 1 : 2}>
          {[1, 2, 2, 1]?.map((item, index) => {
            return (
              <div key={index}>
                <div
                  className={styles.card}
                  style={
                    index % 2 == 0
                      ? { backgroundColor: "#FFEADE" }
                      : { backgroundColor: "rgba(0, 0, 0, 0.06)" }
                  }
                >
                  <div className={styles.card_left}>
                    <div className={styles.card_left_f_line}>free delivery</div>
                    <div className={styles.card_left_sec_line}>
                      Free delivery over ₹50{" "}
                    </div>
                    <div className={styles.card_left_third_line}>
                      Shop ₹50 product and get free delivery anywhre.
                    </div>
                    <button
                      style={
                        index % 2 == 0
                          ? { backgroundColor: "black" }
                          : { backgroundColor: "var(--theme-color" }
                      }
                      className={styles.buy_now_btn}
                    >
                      Buy Now
                    </button>
                  </div>
                  <div className={styles.card_right}>
                    {index % 2 == 0 ? (
                      <Image height={280} src={BannerImg1} alt="" />
                    ) : (
                      <Image height={280} src={BannerImg2} alt="" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default SubBanners;
