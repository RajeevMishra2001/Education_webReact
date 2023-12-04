import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/child.jpg"
import img2 from "../assets/education.jpg"

const Services = () => {
  return (
    <div className='services'>

        <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showIndicators={false}>

            <div>
                <img src={img1} alt="Item1" />
                <p className='legend'>Web Development and Designing</p>
            </div>

            <div>
                <img src={img2} alt="Item1" />
                <p className='legend'>UI/UX Designing</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services