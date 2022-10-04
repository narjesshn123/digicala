import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import  styles from './Category.style.module.css'
import CategoryItem from './CategoryItem'
// import {useParams} from 'react-router-dom'
import { useParams } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode} from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Categories = ({users, id}) => {
 
  return (

<div className="container py-4 px-4 justify-content" style={{backgroundColor:"white"}}>
<h2>Official brand stores in Grocery</h2>
<Swiper navigation={true} modules={[Navigation]} className="mySwiper"
freeMode={true}
grabCursor={true}
// modules={[FreeMode]}
// className="mySwiper"
breakpoints={{
  0: {
    slidesPerView: 1,
    spaceBetween: 10
  },
  480: {
    slidesPerView: 2,
    spaceBetween: 10
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 15
  },
  1280: {
    slidesPerView: 5,
    spaceBetween: 20
  },
}}
>     
     

      {users.map((categories) =>(
        <SwiperSlide>
          <CategoryItem categories={categories} id={categories.id} />
     
          </SwiperSlide>
      ))}

   

</Swiper>
</div>
  )
}

export default Categories
