import React from 'react'
import styles from './GroupCategory.style.module.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductSingle from '../ProductSingle/ProductSingle'
const GroupCategory = () => {
    const[Products, setProducts] = useState([])
    // useEffect(() => {
    //   fetch('/api/users')
    //   .then(res=>res.json())
    //   .then(data =>setProducts(data.users))
    //   .then(data =>console.log(data.users))         
    // },[])
                
  return (              
            <div className={styles.group}>
                <h2> دسته بندی های دیجی کالا </h2>
                <div className={styles.groupProuct}>
                
        {Products.map((product) =>(
          <div key={product.id}>   
            <span>
                <a>
                <img src={product.pic}/>
                <p>{product.name}</p>
                </a>
                </span>

           </div>
          
         
        ))}
         </div>
      </div>
  )
}

export default GroupCategory
