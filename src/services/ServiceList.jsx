import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/customization.png'

const servicesData = [
{   imgUrl : weatherImg,
    title: 'Calculate Weather',
    desc : 'Lorem ipsum dolor sit amet',
},
{   imgUrl : guideImg,
    title: 'Best Tour Guide',
    desc : 'Lorem ipsum dolor sit amet',
},
{   imgUrl : weatherImg,
    title: 'Customization',
    desc : 'Lorem ipsum dolor sit amet',
},

]
const ServiceList = () => {
  return (
    <>
    {servicesData.map((item, index) => (
        <Col lg='3' key={index}>
            <ServiceCard item={item} />
        </Col>
    ))}
    </>
  )
}

export default ServiceList
