import React from 'react'
import menu from '../../assets/image/menu.png'
import store from '../../assets/image/store.png'
import percent from '../../assets/image/percent.png'
import cent from '../../assets/image/cent.png'
import sold from '../../assets/image/sold.png'
import './Navmenustyle.css'
export const Navmenu = () => {
  return (
    <div>
    <div className='navbar'>
    <div className='menu'>
        <img src={menu} />
     <a>دسته بندی  کالا ها </a> </div> 
       
     <div className='menu'>
     <hr />
     </div> 
     <div className='menu'>
        <img className='store' src={store} />
     <a>سوپرمارکت</a> </div>
           
    
   
     <div className='menu'>
        <img className='percent' src={percent} />
     <a>تخفیف ها و پیشنهاد ها </a> </div>
     <div className='menu'>
        <img className='cent' src={cent} />
     <a>شگفت انگیز ها </a> </div>
     <div className='menu'>
        <img className='sold' src={sold} />
     <a>پرفروش ترین ها</a> </div>
     <div className='menu'>
     <hr />
     </div>
     <div className='menu'>
      
      <a>سوالی دارید؟</a> </div>
      <div className='menu'>
       
      <a>فروشنده شوید</a> </div>
   
    
   
 

    </div>
    <hr/>         
    </div>
  )
}
