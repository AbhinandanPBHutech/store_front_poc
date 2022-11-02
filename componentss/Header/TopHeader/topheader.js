import React from "react";
import styles from "./topheader.module.scss";
function TopHeader() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.top_header_left_side}`}>
        <div className={`${styles.top_header_left_user_name}`}>HOME</div>
        <div className={`${styles.top_header_left_user_city}`}>Banglore</div>
      </div>
      <div className={`${styles.top_header_right_side}`}>
        <div className={`${styles.top_header_right_side_text}`}>My Account</div>
      </div>
    </div>
  );
}

export default TopHeader;
