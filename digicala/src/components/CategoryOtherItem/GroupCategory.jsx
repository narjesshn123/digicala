import React from 'react'
import styles from './GroupCategory.style.module.css'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode} from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import { Categorycard } from './Categorycard';
import { Link } from 'react-router-dom'
import ProductSingle from '../ProductSingle/ProductSingle'
const GroupCategory = () => {
    const[Products, setProducts] = useState([])
    // useEffect(() => {
    //   fetch('/api/users')
    //   .then(res=>res.json())
    //   .then(data =>setProducts(data.users))
    //   .then(data =>console.log(data.users))         
    // },[])
                
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
              <SwiperSlide>
          
                <Categorycard/>
              </SwiperSlide>
             
              
              </Swiper>
                {/* <h2> دسته بندی های دیجی کالا </h2>
                <div className={styles.groupProuct}>
                
        {Products.map((product) =>(
          <div key={product.id}>   
            <span>
                <a>
                <img src={product.pic}/>
                <p>{product.name}</p>
                </a>
                </span>

           </div>
          
         
        ))}
         </div> */}
      </div>
  )
}

export default GroupCategory
