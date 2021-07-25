import React from 'react'
import{Row, Col, Button} from "antd"
import Image from 'next/image'

//Imported Comps
import Phone from "../assets/phone.png"


export const Mobile = () => {
  return (
    <div className="mobile">
        Mobile
        <Row>
          <Col span={12}>
              <span>Try Trustbuddie now</span>
              <h1>Its very easy, you can start writing reviews in just 3 minutes</h1>
              <Button className="btn-primary__content">Write a review</Button>
          </Col>
          <Col span={12}>
            <Image src={Phone} alt="app" className="mobile__phone" />
          </Col>
        </Row>
    </div>
  )
}
