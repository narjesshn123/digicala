import React from 'react'
import styles from './CartMenu.style.module.css'
import cini from '../../assets/image/cini.jpg'
import CartMenuItem from '../CartMenuItem/CartMenuItem'
import {Link} from 'react-router-dom'
export const CartMenu = ({show, setShow}) => {
  return (
    <div onMouseLeave={()=>setShow(false)} style={{display : show ? "block" : "none"}} className={styles.cartMenu}>
      <div className={styles.cartNav}>
        <Link className={styles.link} to={'./cart'}> مشاهده سبد خرید </Link>
        <p>کالا 1</p>
      </div>
      <ul>
        <li><CartMenuItem/></li>
        <li><CartMenuItem/></li>
      </ul>
      <div className={styles.cartMenu_order}>
        <div>
          <Link to={'/cart'} className={styles.order_button}>ثبت سفارش</Link>
        </div>
      </div>
      <div>
      <div>{"مبلغ قابل پرداخت"}129 هزار تومان</div>
      {/* <div>{total.price}</div> */}
      </div>
    </div>
  )
}
