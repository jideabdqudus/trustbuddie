import React from "react";
import {Button, Col, Row} from "antd"
export const NavBar: React.FC = () => {
  return (
    <div className="header">
  <Row className="header__bg">
    <Col span={12}><h3 className="header__logo">TrustBuddie</h3></Col>
    <Col span={3}><span>Categories</span></Col>
    <Col span={2}><span>Plans</span></Col>
    <Col span={2}><span>Blog</span></Col>
    <Col span={2}><span>Log in</span></Col>
    <Col span={3}><Button className="btn-primary">Write a review</Button></Col>
  </Row>
    </div>
  );
};
