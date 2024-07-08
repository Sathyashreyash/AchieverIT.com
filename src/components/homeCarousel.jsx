import React, { useState } from 'react'
import '../css/homeCarousel.css'
// import b1 from '../assets/img/b1.jpg'
import b6 from '../assets/img/b6.jpg'
import b5 from '../assets/img/b5.jpg'
import b4 from '../assets/img/b4.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const homeCarousel = () => {
 

  const settings = {
    dots: true,
    speed: 5000, // Increase the duration of the sliding animation
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, // Increase the delay between slides
  };
  
 
    let Slides = [
        {img:b6},
        {img:b5},
        {img:b4},
    ]

    return (
    <div className='img-container'>
        <Slider {...settings}>
       {
        Slides.map((item,i) =>(
           <div key={i} className='img-div'>
            <img src={item.img} />
           </div>
        ))
       }
       </Slider>
    </div>
  )
}

export default homeCarousel