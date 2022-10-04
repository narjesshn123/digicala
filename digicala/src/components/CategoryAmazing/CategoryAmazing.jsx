

import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode} from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import AmazingItem from './AmazingItem'
export const CategoryAmazing = ({products}) => {
 
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
     
{/* {console.log(products)} */}
<div className="container mx-auto">
            {products.map(d => (
                <h1>{d.name}</h1>
            ))}
            
        </div>

   

</Swiper> 
</div>
  )
}

// export default CategoryAmazing
