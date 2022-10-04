import React from 'react'
import styles from './AmazingSingle.style.module.css'
import { WithSpinners } from '../../components/WithSpinner/WithSpinner'
import { getuser } from '../../api/Products.api'
const AmazingSingle = ({product}) => {
  return (
    <div className={styles.AmazingSingle}>
      <div className='details'>
      <div className={styles.big_img}>
      <img src={product.pic} alt=""/>  
      </div>         
      <div className={styles.box}>
      <div className={styles.row}>
          <h2>{product.tittle}</h2>
          <span>{product.price}</span>
        </div>
        <p>{product.description}</p>
        <p>{product.content}</p>
        <div className={styles.thumb}>
          <img 
          src={product.pic} 
          alt=""/>       
        </div>
        <button className={styles.cart}>Add to cart</button>
        </div>   
      </div>
      
    </div>
  )
}

export default WithSpinners(AmazingSingle, getuser)
