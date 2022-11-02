import { Col, Row } from "antd";
import React from "react";
import styles from "./footer.module.scss";
function Footer() {
  return (
    <div className={styles.container}>
      <Row>
        <Col xl={8} lg={12} md={24} sm={24} xs={24}>
          <Row>logo</Row>
          <Row>description</Row>
        </Col>
        <Col xl={8} lg={12} md={24} sm={24} xs={24}>
          <Row>Usefull Links</Row>
          <Row>
            <Col>11</Col>
            <Col>22</Col>
            <Col>33</Col>
          </Row>
        </Col>
        <Col xl={8} lg={12} md={24} sm={24} xs={24}>
          <Row>Privecy & Terms</Row>
          <Row>
            <Col>
              <Row>11</Row>
              <Row>22</Row>
              <Row>33</Row>
              <Row>44</Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
