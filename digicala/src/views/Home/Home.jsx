import React from 'react'
import './HomeStyle.css'; 
import oil from '../../assets/image/oil.jpg'           
import { Carousel } from '../../components/Carousel/Carousel';    
import { CategoryOtherItem } from '../../components/CategoryOtherItem/CategoryOtherItem';
import { CategoryAmazing } from '../../components/CategoryAmazing/CategoryAmazing';
export const Home = () => {
  return (
 <section className='banners'>
            <div>
            <section><Carousel/></section>
            <section>
              <CategoryOtherItem/>
            </section>
            <section><CategoryAmazing/></section>
                <img src= {oil} width={1100}/>
            </div>
        </section>
  
  )
}
