import { Col, Rate, Row } from "antd";
import Image from "next/image";
import React from "react";
import styles from "./whishlistcard.module.scss";

const WhishListCard = (props) => {
  const {
    img,
    heading,
    rating,
    reviews,
    status,
    price,
    original_price,
    discount,
    size,
    color,
  } = props.data;
  return (
    <Row className={styles.whishlist_card}>
      <div className={styles.heart_icon}>❤️</div>
      <Col xl={2} className={styles.card_img_wrapper}>
        <Image {...img} alt="" />
      </Col>
      <Col xl={19} className={styles.card_details_wrapper}>
        <Row>{heading}</Row>
        <Row className={styles.rating_wrapper}>
          <Rate defaultValue={rating} disabled allowHalf />
          <div className={styles.reviews_count}>
            {rating}({reviews}reviews)
          </div>
        </Row>
        <Row className={styles.status}>{status}</Row>
        <Row className={styles.price_wrapper}>
          <div className={styles.whishlist_card_price}>Price: {price}</div>
          <s className={styles.whishlist_card_original_price}>
            {original_price}
          </s>
          <div className={styles.whishlist_card_discount}>{discount}</div>
        </Row>
        <Row className={styles.including_tax_text}>
          (Inclusive of all taxes)
        </Row>
        <Row className={styles.size_color_wrapper}>
          <div>Size : {size}</div>
          <div className={styles.verticle_line}></div>
          <div>Colour : {color}</div>
        </Row>
      </Col>
      <Col xl={3} className={styles.btn_btn_warapper}>
        <button className={styles.btn}>MOVE TO CART</button>
      </Col>
    </Row>
  );
};

export default WhishListCard;
