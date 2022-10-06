import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode} from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import AmazingItem from './AmazingItem'
export const CategoryAmazing = ({products, id, filter, setFilter}) => {
 
  return (

<div className="container py-4 px-4 justify-content" style={{backgroundColor:'#ef4056', borderRadius:"16px"}}>
<h2 style={{color:"white"}}>Amazing Product </h2>

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
     

          
{products.filter((product)=>product.name.toLowerCase().includes(filter.toLowerCase())).length===0 ?
        <p></p> :           
        products.filter(product=>product.name.toLowerCase().includes(filter.toLowerCase())).map(product=>(
     
        <SwiperSlide>
          <AmazingItem  name={product.name} product={product} id={product.id} />
     
          </SwiperSlide>
      ))}

   

</Swiper>     
    

   

 
</div>
  )
}

// export default CategoryAmazing
