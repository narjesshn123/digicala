import React from 'react'
import styles from './ProductSingle.style.module.css'
const ProductSingleLine = ({Product}) => {
  return (
    <div>
         <section className={styles.productSingleLine}>
      <section>
                <div className={styles.productSingleLineRight}>
                <a>digicala/  </a>
                <a>  {Product.category} /  </a>
                <a>{Product.tittle} </a>
                </div>
          </section>
          <section className={styles.productSingleLineLeft}>
            <div>
                <p>ثبت آگهی در پیندو</p>
            </div>
            <div><p>فروش در دیجی کالا</p></div>
          </section>
          </section>
    </div>
  )
}

export default ProductSingleLine
