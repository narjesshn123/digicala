import React from 'react'
import styles from './CartMenu.style.module.css'
import cini from '../../assets/image/cini.jpg'
import CartMenuItem from '../CartMenuItem/CartMenuItem'
import { BiTrash, BiPlus, BiMinus } from 'react-icons/bi'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useMemo } from 'react'
import { addtoCart, remove, decrease } from '../../redux/reducers/Cart.reducer'
import { useState } from 'react'
import Auth from '../../api/localStorage'
import { refreshAccessToken } from '../../api/authentication'
export const CartMenu = ({show, setShow}) => {
const items = useSelector(state=>state.cart.items) ?? []
const dispatch = useDispatch()
// const total_price = useMemo(()=>items.reduce((price, item)=>price + (item.count*item.price), 0) ,items) 
const total_price = useSelector((state)=>state.cart.items.reduce
((price, item) => price + (item.price*item.count),0)) 

const total_count = useSelector((state) => state.cart.items.reduce((count, item)=>
count + item.count, 0))

const [state, setState] = useState({
  username: "",
  password: "",
});

  return (
    <div onMouseLeave={()=>setShow(false)} style={{display : show ? "block" : "none"}} className={styles.cartMenu}>
      <div className={styles.cartNav}>
        {(Auth.checklogin()) ?<Link className={styles.link} to={'./cart'} 
        onClick={()=>setShow(false)}>
           مشاهده سبد خرید 
           </Link> : 
        <p>login</p>
           }
        <p>کالا {total_count}</p>
      </div>
      <ul>
        {items.map(item=>
          <li key={item.id}>

<div className={styles.cartMenuItem_info} >
        <div className={styles.cartMenuItem_tittle}>{item.tittle}</div>
        <div className={styles.cartMenuItem_description}>{item.description}</div>
        <div className={styles.cartMenuItem_control}>
        <div onClick={()=>{dispatch(remove(item))}}><BiTrash/></div>
        <div onClick={()=>dispatch(addtoCart(item))}><BiPlus/></div>
           <div>{item.count}</div>
           <div onClick={()=>dispatch(decrease(item))}><BiMinus/></div>
         
          {/* <div>{item.count}</div> */}
        </div>
      </div>
      <div className={styles.cartMenuItem_image}>
        <img width={"100%"} src={item.pic} alt="products"/>
      </div>
            {/* <CartMenuItem tittle={item.tittle} description={item.description}
            src={item.src} count={item.count}/> */}
         </li>
          )}
      
      </ul>
      <div className={styles.cartMenu_order}>
        <div>
          <Link to={'/cart'} className={styles.order_button}
          onClick={()=>setShow(false)}>ثبت سفارش</Link>
        </div>
      </div>
      <div>
      <div>{"مبلغ قابل پرداخت"}</div>
      <div>{total_price}</div>
      </div>
    </div>
  )
}
