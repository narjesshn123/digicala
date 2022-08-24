import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Category.style.module.css'
const CategoryItem = ({categories, id, pic}) => {
  return (
    <div className={styles.categoryitem}>
      <Link to={"/users/" +id} pic={pic}>
      {/* <p>{categories.id}</p> */}
       <img src={categories.pic} />
       <span className={styles.info}>
       <h4>{categories.tittle}</h4>
       <h5>{categories.name}</h5>
       <button>SHOP NOW</button>
       </span>
                
       </Link>
    </div>
  )
}

export default CategoryItem
