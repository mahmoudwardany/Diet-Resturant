import React from "react";
import {Carousel} from 'react-bootstrap'
import im1 from '../images/man1.webp'
import im2 from '../images/man2.jpg'
import im3 from '../images/man3.jpg'
import './Slider.css'


const Slider =()=>{
return(
<section className="slider">
    <h1>Our Clients</h1>
    <Carousel>
      <Carousel.Item>
        <img src={im1} alt='lk'/>
        <Carousel.Caption>
          <p>First slide label</p>
          <span>Nulla vitae elit libero, a pharetra augue mollis interdum.</span>
        </Carousel.Caption>
      </Carousel.Item>
     <Carousel.Item>
        <img src={im2} alt='lk'/>

        <Carousel.Caption>
        <p>Second slide label</p>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img src={im3} alt='lk'/>

        <Carousel.Caption>
          <p>Third slide label</p>
          <span>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </span>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</section>


)
}

export default Slider