import React from 'react'
import {Row, Col, Button} from "antd"
import Image from "next/image"

//Imported Comps
import { SearchComponent } from './SearchComponent'
import Beauty from "../assets/beauty.svg"
import HeroImage from "../assets/hero_image.png"
import More from "../assets/more.svg"
import Pos from "../assets/pos.png"
import Restaurant from "../assets/restaurant.svg"
import Shoping from "../assets/shoping.svg"
import Shiping from "../assets/shipping.svg"



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
        <hr/>
        <nav className="shift">
          <ul>
            <li><a href="#" style={{margin:0}}> <Image src={Beauty} alt="Beauty and Well Being" className="search__category__image" />Beauty & Well-Being</a></li>
            <li><a href="#"> <Image src={Restaurant} alt="Restaurants and Bars" className="search__category__image" />Restaurants & Bars</a></li>
            <li><a href="#"> <Image src={Shoping} alt="Shopping" className="search__category__image" />Shopping & Fashion</a></li>
            <li><a href="#"><Image src={Shiping} alt="Delivery Services" className="search__category__image" /> Delivery Services</a></li>
            <li><a href="#"><Image src={More} alt="More" className="search__category__image" /> More</a></li>
          </ul>
      </nav>
      </div>
    </div>
  )
}
