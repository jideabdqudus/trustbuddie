import React from 'react'
import {Row, Col, Button} from "antd"
import Image from "next/image"

//Imported Comps
import Pos from "../assets/pos.png"
import Security from "../assets/security.svg"
import Stars from "../assets/stars.svg"
import Guy from "../assets/guy.png"
import Chart from "../assets/chart.svg"

export const Content: React.FC = () => {
  return (
    <div className="middle-hero">
      <div className="middle-hero">
        <Row>
          <Col span={12} className="middle-hero__left">
            <Image src={Pos} alt="seamless payment" className="middle-hero__left__image"/>
          </Col>
          <Col span={12} className="middle-hero__right">
            <div style={{marginBottom:"35px"}}>
              <h1>Bridging the gap between customers and businesses</h1>
              <span>We are a technology company focused on</span>
            </div>
            <Row gutter={[32, 32]}>
              <Col span={12}>
                  <h3><Image src={Stars} alt="Stars" /> Trust</h3>
                  <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonum eirmod tempor invidu labore.</span>
              </Col>
              <Col span={12}>
                  <h3> <Image src={Security} alt="Stars" />Transparency</h3>
                  <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonum eirmod tempor invidu labore.</span>
              </Col>
            </Row>
            <Button className="btn-primary__content">Write A Review</Button>
          </Col>
        </Row>
        <br/><br/>
        <Row>
        <Col span={12} className="middle-hero__right">
            <div style={{marginBottom:"35px"}}>
              <h1>We are committed to helping you make more informed choices</h1>
              <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nemi eirmod labore et dolore magna aliquyam erat sed diam nonumy eirtr tempor invidunt ut labore et dolore.consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</span>
            </div>
            <Row gutter={[32, 32]}>
              <h4>Lorem ipsum dolor sit amet, consetetur sadips.</h4>
              <h4>Lorem ipsum dolor sit amet, consetetur sadips.</h4>
              <h4>Lorem ipsum dolor sit amet, consetetur sadips.</h4>
            </Row>
          </Col>
          <Col span={12} className="middle-hero__left">
            <Image src={Guy} alt="payment" className="middle-hero__left__image"/>
          </Col>
        </Row>
        <Row>
          <Col span={12} className="middle-hero__left">
            <Image src={Chart} alt="chart" className="middle-hero__left__image"/>
          </Col>
          <Col span={12} className="middle-hero__right">
            <div style={{marginBottom:"35px"}}>
              <h1>Over 71% of Nigerians believe customer reviews are helpful</h1>
              <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nemi eirmod labore et dolore magna aliquyam erat sed diam nonumy eirtr tempor invidunt ut labore et dolore.consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</span>
            </div>
            <Button className="btn-primary__content">Write A Review</Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}
