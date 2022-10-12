import { UserOutlined } from "@ant-design/icons";
import React from "react";
import styles from "./index.module.css";
function TopHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.top_header_left_side}>
        <div className={styles.top_header_left_name}>Name</div>
        <div className={styles.top_header_left_city}>Banglore</div>
      </div>
      <div className={styles.top_header_login_signup_text}>
        <UserOutlined />
        Loin/Signup
      </div>
    </div>
  );
}

export default TopHeader;
