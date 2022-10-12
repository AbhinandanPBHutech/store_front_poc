import { Col, Rate, Row } from "antd";
import React from "react";
import styles from "./index.module.css";
import Img from "../../../public/assets/product-card.png";
import Img1 from "../../../public/assets/product-card2.png";
import Img2 from "../../../public/assets/product-card3.png";
import Img3 from "../../../public/assets/product-card4.png";
import Image from "next/image";
function MostPopulerProduct() {
  return (
    <div className={styles.container}>
      <div className={styles.top_row}>
        <div className={styles.top_row_heading}>Most Popular Products</div>
        <div className={styles.top_row_see_all}>See all</div>
      </div>
      <Row gutter={[32, 32]}>
        {[
          Img,
          Img1,
          Img2,
          Img3,
          Img,
          Img3,
          Img2,
          Img1,
          Img3,
          Img1,
          Img,
          Img2,
        ]?.map((item, index) => {
          return (
            <Col xs={24} sm={24} md={12} lg={6} xl={6} key={index}>
              <div className={styles.card}>
                <Image {...item} alt="" />
                <div className={styles.card_title}>
                  Casual Sneakers Canvas Shoes For Sneakers For Men
                </div>
                <div style={{ height: "20px" }}>
                  <Rate allowHalf defaultValue={4.5} />
                </div>
                <div className={styles.card_price}>
                  <div className={styles.card_price_left}>
                    <div className={styles.card_discount_price}>₹350</div>
                    <div>
                      <s className={styles.card_actual_price}>₹438</s>
                    </div>
                    <div className={styles.price_off}>{"(50% off)"}</div>
                  </div>
                  <div className={styles.product_status}>In Stock</div>
                </div>
                <div>
                  <button className={styles.add_to_card_btn}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default MostPopulerProduct;
