import React from 'react'
import {Row, Col, Button} from "antd"
import Image from "next/image"

//Imported Comps
import Pos from "../assets/pos.png"
import Security from "../assets/security.svg"
import Stars from "../assets/stars.svg"
import Guy from "../assets/guy.png"
import Chart from "../assets/chart.svg"
import Beauty from "../assets/beauty.svg"


export const Content: React.FC = () => {
  return (
    <div className="middle-hero">
      <div className="middle-hero">
        <Row style={{marginBottom:"80px"}}>
          <Col span={12} className="middle-hero__left">
            <Image src={Pos} alt="seamless payment" className="middle-hero__left__image"/>
          </Col>
          <Col span={12} className="middle-hero__right">
            <div style={{margin:"40px 20px 35px 0"}}>
              <h1>Bridging the gap between customers and businesses</h1>
              <span>We are a technology company focused on</span>
            </div>
            <Row gutter={[32, 32]}>
              <Col span={12}>
                  <Image src={Stars} alt="Stars" className="middle-hero__right__image" />
                  <h3> Trust</h3>
                  <h5>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonum eirmod tempor invidu labore.</h5>
              </Col>
              <Col span={12}>
              <Image src={Security} alt="Stars" className="middle-hero__right__image" />
                  <h3> Transparency</h3>
                  <h5>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonum eirmod tempor invidu labore.</h5>
              </Col>
            </Row>
            <Button className="btn-primary__content">Write A Review</Button>
          </Col>
        </Row>
        <Row style={{marginBottom:"10px"}}>
        <Col span={12} className="middle-hero__right">
            <div style={{margin:"35px 0px 35px 0px", paddingRight:"80px"}}>
              <h1 style={{marginBottom:"10px"}}>We are committed to helping you make more informed choices</h1>
              <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nemi eirmod labore et dolore magna aliquyam erat sed diam nonumy eirtr tempor invidunt ut labore et dolore.consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</span>
            </div>
            <Row gutter={[0, 16]}>
              <h4> <Image src={Beauty} alt="Stars" className="middle-hero__right__image" /> Lorem ipsum dolor sit amet, consetetur sadips.</h4>
              <h4> <Image src={Beauty} alt="Stars" className="middle-hero__right__image" /> Lorem ipsum dolor sit amet, consetetur sadips.</h4>
              <h4> <Image src={Beauty} alt="Stars" className="middle-hero__right__image" /> Lorem ipsum dolor sit amet, consetetur sadips.</h4> 
            </Row>
          </Col>
          <Col span={12}>
            <Image src={Guy} alt="payment" className="commitment_image"/>
          </Col>
        </Row>
        <Row>
          <Col span={12} className="middle-hero__left">
            <Image src={Chart} alt="chart" className="middle-hero__left__image"/>
          </Col>
          <Col span={12} className="middle-hero__right">
            <div style={{margin:"55px 0px 35px 0px"}}>
              <h1>Over 71% of Nigerians believe customer reviews are helpful</h1>
              <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nemi eirmod labore et dolore magna aliquyam erat sed diam nonumy eirtr tempor invidunt ut labore et dolore.consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</span>
            </div>
            <Button className="btn-primary__underlined">Learn More > </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}
