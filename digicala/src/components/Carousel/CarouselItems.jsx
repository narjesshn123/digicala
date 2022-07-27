import React from 'react'
import { CarouselSlide } from './CarouselSlide'
import { useState, useEffect, useRef } from 'react'
import './Carouselstyle.css'
import CarouselControl from './CarouselControl'
import { CarouserIndicator } from './CarouserIndicator'
export const CarouselItems = ({ interval=5000, controls= false, indicators = false}) => {
  const[currentSlide, setCurrentSlide] = useState(0)
  const slideInterval = useRef()
  const startTimeInterval = ()=>{
    stopTimeInterval()
    slideInterval.current = setInterval(()=>{
      setCurrentSlide(currentSlide => currentSlide < CarouselSlide.length-1 ? currentSlide + 1 : 0)
    }, 3000)
  }
  const stopTimeInterval = ()=>{
    if(slideInterval.current){
      clearInterval(slideInterval.current)
    }
  }
  useEffect(()=>{
    startTimeInterval()
    return ()=>stopTimeInterval()
  },[])
  
const prev = () =>{
  startTimeInterval()
  const index = currentSlide=>currentSlide > 0 ? currentSlide-1 : CarouselSlide.length-1
  setCurrentSlide(index)
}

const next = ()=>{
  startTimeInterval()
  const index = currentSlide=> currentSlide<CarouselSlide.length-1?currentSlide+1:0
  setCurrentSlide(index)
}
const switchIndex = (index)=>{
startTimeInterval()
setCurrentSlide(index)
}

  return (
    <div>
           <div className='carousel'>
            <div className='carousel-inner'
            style={{transform:`translateX(${-currentSlide * 100}%)`}}>
             
           {CarouselSlide.map((slide, index )=>(
               <div className='carousel-item' onMouseEnter={stopTimeInterval} onMouseOut={startTimeInterval}>
                    <img src={slide} key={index}/>         
                  </div>
                 ))}
    </div>
    <CarouserIndicator slides={CarouselSlide} currentSlide={currentSlide} switchIndex={switchIndex}/>
    <CarouselControl prev={prev} next={next}/>                    
    </div>
    </div>
  )
}
