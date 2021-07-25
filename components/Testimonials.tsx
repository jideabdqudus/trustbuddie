import React from 'react'
import{Row, Col} from "antd"
import Image from 'next/image'

//Imported Comps
import AvatarOne from "../assets/avatar_one.png"
import PoorRating from "../assets/poor_rate.svg"

export const Testimonials: React.FC = () => {
  return (
    <div className="testimonials">
      <h1>Recent reviews from<br/> customers on TrustBuddie</h1>
      <Row gutter={[1,3]}>
        <Col span={8}>
          <div className="testimonial">
              <Row gutter={[10,15]} style={{marginBottom:"10px"}}>
                <Col span={4}>
                  <Image src= {AvatarOne} alt="avatar" className="testimonial__avatar"/>
                </Col>
                <Col span={20}>
                <Image src= {PoorRating} alt="rate" className="testimonial__rating" />
                </Col>
              </Row>
              <span>I am so angry right now, I am never using this dispatch company again, they broke my package 😡</span>
              <h4>Femi <span>reviewed</span> Eazi Dispatch</h4>
          </div>
        </Col>
        <Col span={8}>
          <div className="testimonial">
              <Row gutter={[10,15]} style={{marginBottom:"10px"}}>
                <Col span={4}>
                  <Image src= {AvatarOne} alt="avatar" className="testimonial__avatar"/>
                </Col>
                <Col span={20}>
                <Image src= {PoorRating} alt="rate" className="testimonial__rating" />
                </Col>
              </Row>
              <span>I am so angry right now, I am never using this dispatch company again, they broke my package 😡</span>
              <h4>Femi <span>reviewed</span> Eazi Dispatch</h4>
          </div>
        </Col>
        <Col span={8}>
          <div className="testimonial">
              <Row gutter={[10,15]} style={{marginBottom:"10px"}}>
                <Col span={4}>
                  <Image src= {AvatarOne} alt="avatar" className="testimonial__avatar"/>
                </Col>
                <Col span={20}>
                <Image src= {PoorRating} alt="rate" className="testimonial__rating" />
                </Col>
              </Row>
              <span>I am so angry right now, I am never using this dispatch company again, they broke my package 😡</span>
              <h4>Femi <span>reviewed</span> Eazi Dispatch</h4>
          </div>
        </Col>
      </Row>
    </div>
  )
}
