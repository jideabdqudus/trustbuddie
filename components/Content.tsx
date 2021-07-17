import React from 'react'
import {Row, Col, Button} from "antd"
import Image from "next/image"

//Imported Comps
import Pos from "../assets/pos.png"


export const Content: React.FC = () => {
  return (
    <div className="middle-hero">
      <div className="middle-hero">
        <Row>
          <Col span={12}>
            <Image src={Pos} alt="seamless payment"/>
          </Col>
          <Col span={12}>
            <h1>Bridging the gap between customers and businesses</h1>
          </Col>
        </Row>
      </div>
    </div>
  )
}
