import React from 'react'
import styles from './Header.style.module.css'
import logo from '../../assets/image/logo.svg';
import takhfif from '../../assets/image/takhfif.gif'
import basket from '../../assets/image/basket.png'
import search from '../../assets/image/search.png';   
import { Carousel } from '../Carousel/Carousel';  
import login from '../../assets/image/login.png';  
import { BiBasket, BiSearch } from 'react-icons/bi';
import { CartMenu } from '../CartMenu/CartMenu';
import { useState } from 'react';
 import { useSelector } from 'react-redux';              
import Auth from '../../api/localStorage';
import { Link } from 'react-router-dom';
export const Header = () => {
  const[show, setShow] = useState()
  const total_count = useSelector((state) => state.cart.items.reduce((count, item)=>
count + item.count, 0))
  return (
   <>
    <div className={styles.container_img}>
        <img src={takhfif}/>
 </div>
      <div className={styles.wrapper}>
      <div className={styles.right}>
          
          <span onMouseEnter={()=>setShow(true)} style={{position:"relative"}}>
            <BiBasket style={{cursor: "pointer"}}/>
            <span>{total_count}</span>
          <CartMenu show={show} setShow={setShow}/>           
          </span>
          <span>register</span>
          <Link to={"/profile"}>
          <span>profile</span>
          </Link>
          <span>sign in</span>
          <span onClick={()=>Auth.logout()} style={{cursor:"pointer"}} >log out</span>
          {/* <span style={{cursor: "pointer"}}><p>1</p></span> */}

        </div>
        
        <div className={styles.center}>
          <p>EVALS.</p>
          </div>
          <div className={styles.left}>
          EN
           <span>
            <BiSearch/>
           <input/>
           </span> 
      
        </div>
        
  
   
      </div>
      
     
     
      </>

  

  )
}
