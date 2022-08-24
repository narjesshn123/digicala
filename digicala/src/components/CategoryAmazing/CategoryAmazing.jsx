import React from 'react'
import styles from './CategoryAmazing.style.module.css'
import box from '../../assets/image/box.png'
import { menuAmazing } from './menuAmazing'
export const CategoryAmazing = () => {
  return (
    <section>
        <div className={styles.container}>
          <div>
            <p>پیشنهاد شگفت انگیــــز</p>
             <img src={box}/>
          </div>
          {menuAmazing.map((amaz, index)=>(
          <div className={styles.menu} key={index}>
           <div className={styles.menuItem}>
            <div className={styles.menuItemAll}>
             {amaz.pic}
              <div>
                <div className={styles.itemPrice}>
                    <h4>{amaz.percent}</h4>
                    <h5>{amaz.price}</h5>
                    </div>
                <h6 className={styles.itemPrev}>{amaz.prev}</h6>
              </div>
              </div>
              </div>
          
            </div>
          ))}
         
        </div>
    </section>
  )
}
