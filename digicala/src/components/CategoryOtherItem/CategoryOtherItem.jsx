import React from 'react'
import styles from './Category.style.module.css'
import './Category.style.module.css'
import { categoryother } from './categoryother'
import {Link} from 'react-router-dom'
export const CategoryOtherItem = () => {
  return (
    <section>
 <div className={styles.banners}>
        {categoryother.map((otheritem, index) => (
              
     <a href='#' className={styles.bannersItem} key={index}>
     <Link to='/productSingle/productId'>
    
            {otheritem.pic}
           <div>
             <h5 className={styles.description}>
              
                {otheritem.description}
                </h5>
           </div>
           </Link>
        </a>
        
        ) 
      
        )}
        
        <a className={styles.bannersItem}>
          <button className={styles.bannersCircle}>
    <h1 style={{fontSize: "2rem", marginTop: "-0.01rem"}}>...</h1>
          </button>
          <h5>بیشتر</h5>
        </a>
        </div>
    </section>
  )
}
