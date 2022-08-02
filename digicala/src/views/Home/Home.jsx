import React from 'react'
import './HomeStyle.css'; 
import oil from '../../assets/image/oil.jpg'      

export const Home = () => {
  return (
 <section className='banners'>
            <div>
                <img src= {oil} width={1100}/>
            </div>
        </section>
  
  )
}
