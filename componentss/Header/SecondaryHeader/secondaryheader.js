import { Col, Input, Row, Select } from "antd";
import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/logo.svg";
import styles from "./secondaryheader.module.scss";
import {
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

const SeconderyHeader = () => {
  const router = useRouter();
  const selectBefore = (
    <Select defaultValue="All Categories" className="select-before">
      <Select.Option value="All Categories">All Categories</Select.Option>
      <Select.Option value="Shoes">Shoes</Select.Option>
    </Select>
  );
  const selectAfter = (
    <div>
      <SearchOutlined />
    </div>
  );
  return (
    <div className={styles.container}>
      <Row className={styles.container_main_row}>
        <Col xl={5} lg={5} md={5} sm={16} xs={16}>
          <Image {...Logo} alt="" />
        </Col>
        <Col
          className={styles.search_feild}
          xl={14}
          lg={14}
          md={14}
          sm={0}
          xs={0}
        >
          <Input
            addonBefore={selectBefore}
            addonAfter={selectAfter}
            placeholder="Search here"
          />
        </Col>
        <Col
          xl={5}
          lg={5}
          md={5}
          sm={8}
          xs={8}
          className={styles.whishlist_cart_wrapper}
        >
          <div
            className={styles.whishlist_wrapper}
            onClick={() => router.push("/whishlist")}
          >
            <div>
              <HeartOutlined style={{ fontSize: "23px" }} />
              {/* <span className={styles.  }>3</span> */}
            </div>
            <div className={styles.whishlist_text}>Whishlist</div>
          </div>
          <div className={styles.cart_wrapper}>
            <div>
              <ShoppingCartOutlined style={{ fontSize: "23px" }} />
            </div>
            <div>
              <div className={styles.cart_text}>My cart</div>
              <div className={styles.cart_price}>₹762</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className={styles.mobile_search}>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Input
            addonBefore={selectBefore}
            addonAfter={selectAfter}
            placeholder="Search here"
          />
        </Col>
      </Row>
    </div>
  );
};

export default SeconderyHeader;
