import { Carousel } from "antd";
import Image from "next/image";
import React from "react";
import styles from "./index.module.css";
import Banner from "../../../public/assets/top-banner.png";
function HomePageTopBanner() {
  return (
    <div>
      <Carousel autoplay>
        {[1]?.map((item, index) => {
          return (
            <div className={styles.carousel} key={index}>
              <Image {...Banner} alt="" />
              <div className={styles.carousel_text_wrapper}>
                <div className={styles.carousel_text_wrapper_first_line}>
                  Save up to 60% off on your first order
                </div>
                <div className={styles.carousel_text_wrapper_second_line}>
                  Don’t miss our daily amazing deals.
                </div>
                <button className={styles.carousel_text_wrapper_btn}>
                  SHOP NOW
                </button>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default HomePageTopBanner;
