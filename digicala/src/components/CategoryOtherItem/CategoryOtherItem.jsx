import React from 'react'
import styles from './Category.style.module.css'
import GroupCategory from './GroupCategory'
import './Category.style.module.css'
import { categoryother } from './categoryother'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
export const CategoryOtherItem = () => {

 

  return (
    <div>
    <section>
 <div className={styles.banners}>
        {categoryother.map((otheritem, index) => (
              
     <a href='#' className={styles.bannersItem} key={index}>
    
    
            {otheritem.pic}
           <div>
             <h5 className={styles.description}>
              
                {otheritem.description}
                </h5>
           </div>
         
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

    </div>
  )
}
