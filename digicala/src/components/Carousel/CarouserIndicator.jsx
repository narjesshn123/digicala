import React from 'react'
import './Carouselstyle.css'
export const CarouserIndicator = ({slides, currentSlide, switchIndex}) => {
  return (
    <div className='carousel-indicator'>
        {slides.map((_,index)=>(
            <button className={`carousel-indicator-item ${currentSlide === index ? "active" : ""}`}
            onClick={()=>{switchIndex(index)}}></button>
        ))}

    </div>
  )
}
