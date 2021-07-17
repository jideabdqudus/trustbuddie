import React from "react";
import {Button, Col, Row} from "antd"
export const NavBar: React.FC = () => {
  return (
    <div className="header">
      <Row className="header__bg">
        <Col span={4}><h3 className="header__logo">TrustBuddie</h3></Col>
    <Col span={20}>
      <nav className="stroke">
        <ul>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">For Businesses</a></li>
          <li><a href="#">Log in</a></li>
          <li><Button className="btn-primary">Write a review</Button></li>
        </ul>
      </nav>
    </Col>
      </Row>
    </div>
  );
};
