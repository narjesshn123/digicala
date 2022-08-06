import React from 'react'
import './HomeStyle.css'; 
import oil from '../../assets/image/oil.jpg'           
import { Carousel } from '../../components/Carousel/Carousel';    
import { CategoryOtherItem } from '../../components/CategoryOtherItem/CategoryOtherItem';
import { CategoryAmazing } from '../../components/CategoryAmazing/CategoryAmazing';
import Container from '../../components/Container/Container';
export const Home = () => {
  return (
 <section className='banners'>
            <div>
              <Container>
            <section><Carousel/></section>
            </Container>
            <Container>
            <section>
              <CategoryOtherItem/>
            </section>
            </Container>
            <Container>
            <section><CategoryAmazing/></section>
            </Container>
                <img src= {oil} width={1100}/>
            </div>
        </section>

  
  )
}
