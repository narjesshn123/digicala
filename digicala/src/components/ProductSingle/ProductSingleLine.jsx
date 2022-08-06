import React from 'react'
import styles from './ProductSingle.style.module.css'
const ProductSingleLine = () => {
  return (
    <div>
         <section className={styles.productSingleLine}>
      <section>
                <div className={styles.productSingleLineRight}>
                <a>دیجی کالا  /  </a>
                <a>  کالای دیجیتال  /  </a>
                <a> لوازم جانبی کالای دیجیتال  /  </a>
                <a>لوازم جانبی گوشی موبایل  /  </a>
                <a>کالای دیجیتال  </a>
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
