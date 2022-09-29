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
const Categories = ({users, id}) => {
  // const {id} = useParams;
  // alert(userId)

  return (

<div className="container py-4 px-4 justify-content bg-light">
<Swiper
freeMode={true}
grabCursor={true}
modules={[FreeMode]}
className="mySwiper"
slidesPerView={5}
spaceBetween={30}
>           

      {users.map((categories) =>(
        <SwiperSlide>
          <CategoryItem categories={categories} id={categories.id}/>
          </SwiperSlide>
      ))}

   


</Swiper>
</div>
  )
}

export default Categories
