import React from 'react'
import {Row, Col, Button} from "antd"
import Image from "next/image"
//Imported Comps
import HeroImage from "../assets/hero_image.png"

export const Hero: React.FC = () => {
  return (
    <div className="container">
      <Row className="hero">
        <Col span={12}>
          <h1>Everyone has a story to tell, we would love to hear yours</h1>
          <span>TrustBuddie helps customers across Africa share reviews about businesses they have patronised. Reviews help over 2,000,000 Africans make more informed buying decisions.</span>
          <Button className="btn-primary">Share your story</Button>
        </Col>
        <Col span={12} className="hero__image"><Image src={HeroImage} alt="Hero Image" height="400" width="400"/></Col>
      </Row>
    </div>
  )
}
