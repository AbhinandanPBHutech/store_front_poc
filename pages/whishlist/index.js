import { Breadcrumb, Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import styles from "./index.module.scss";
import { whishListData } from "../../constants/JsonData/whishList/index";
import WhishListCard from "../../componentss/Cards/whishListCard/whishlistcard";
const WhishList = () => {
  return (
    <div className={styles.container}>
      <Row className={styles.bread_crumb}>
        <Breadcrumb>
          <Breadcrumb.Item href=""></Breadcrumb.Item>
          <Breadcrumb.Item href="/">
            <span>Home</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>WhishList</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row>
        <Col className={styles.whishlist_heading}>
          Whishlist<small className={styles.whishlist_number}>{"(3)"}</small>
        </Col>
      </Row>
      <div className={styles.whishlist_card_wrapper}>
        {whishListData?.data?.map((item, index) => {
          return <WhishListCard data={item} key={index} />;
        })}
        <Row></Row>
      </div>
    </div>
  );
};

export default WhishList;
