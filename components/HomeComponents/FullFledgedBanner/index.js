import Image from "next/image";
import React from "react";
import styles from "./index.module.css";
import Img from "../../../public/assets/full-fledged-banner.png";
function FullFledgedBanner() {
  return (
    <div className={styles.container}>
      <Image {...Img} alt="" objectFit="contain" />
      <div className={styles.banner_text}>
        <div className={styles.banner_text_f_line}>
          Save up to 60% off on your first order
        </div>
        <div className={styles.banner_text_sec_line}>
          Don’t miss our daily amazing deals.
        </div>
        <button className={styles.banner_btn}>SHOP NOW</button>
      </div>
    </div>
  );
}

export default FullFledgedBanner;
