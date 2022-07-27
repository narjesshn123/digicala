import React from 'react'
import './Carouselstyle.css'
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa';
const CarouselControl = ({prev, next}) => {
  return (
    <div>
      <button className='carousel-control left' onClick={prev}>
      <FaChevronLeft/>
      </button>
      <button className='carousel-control right' onClick={next}>
        <FaChevronRight/>
      </button>
    </div>
  )
}

export default CarouselControl
