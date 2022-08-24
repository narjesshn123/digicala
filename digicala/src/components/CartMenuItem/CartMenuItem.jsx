import React from 'react'
import { BiTrash } from 'react-icons/bi'
import cini from '../../assets/image/cini.jpg'
import styles from './CartMenuItem.style.module.css'
const CartMenuItem = ({tittle = 'product1', description='description', count=1, src=cini}) => {
  return (
    <div className={styles.cartMenu_item}>
      <div className={styles.cartMenuItem_info}>
        <div className={styles.cartMenuItem_tittle}>{tittle}</div>
        <div className={styles.cartMenuItem_description}>{description}</div>
        <div className={styles.cartMenuItem_control}>
          <div><BiTrash/></div>
          <div>{count}</div>
        </div>
      </div>
      <div className={styles.cartMenuItem_image}>
        <img width={"100%"} src={src} alt="products"/>
      </div>
    </div>
  )
}

export default CartMenuItem
