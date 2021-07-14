import React from 'react'
import {Row, Col, Button} from "antd"
import Image from "next/image"
//Imported Comps
import HeroImage from "../assets/hero_image.png"
import Beauty from "../assets/ic_spa_24px.svg"
import { SearchComponent } from './SearchComponent'

export const Hero: React.FC = () => {
  return (
    <div className="container">
      <Row className="hero">
        <Col span={12} className="hero__left">
          <h1>Everyone has a story to tell, we would love to hear yours</h1>
          <span>TrustBuddie helps customers across Africa share reviews about businesses they have patronised. Reviews help over 2,000,000 Africans make more informed buying decisions.</span>
          <Button className="btn-primary__hero">Share your story</Button>
        </Col>
        <Col span={12} className="hero__right"><Image src={HeroImage} alt="Hero Image" height="420" width="400"/></Col>
      </Row>
      <div className="search">
      <SearchComponent/>
      <Row gutter={[32, 32]}>
        <Col span={5} >
          <div className="search__category"><Image src={Beauty} alt="Beauty and Well Being"/><h3>Beauty & Well Being</h3></div>
        </Col>
        <Col span={5} ></Col>
        <Col span={5} ></Col>
        <Col span={5} ></Col>
        <Col span={4} ></Col>
      </Row>  
      </div>

    </div>
  )
}
