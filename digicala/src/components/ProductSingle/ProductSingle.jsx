import React from 'react'
import styles from './ProductSingle.style.module.css'
import ProductSingleLine from './ProductSingleLine'
import ProductSingleIcon from './ProductSingleIcon'
import sharjer from '../../assets/image/sharjer.jpg'  
import { FaStar, FaThumbsUp, FaInfo,  } from 'react-icons/fa'  
import { BiCheck } from "react-icons/bi"; 
import { Link } from 'react-router-dom' 
const ProductSingle = () => {
  return (
    <div>
       <section><ProductSingleLine/></section>
            
       
      <div className={styles.productSingleLeft}>
        <div className={styles.productSingleIcon}>
            <h3>فروش ویژه</h3>
           <div><ProductSingleIcon/></div>
        </div>
        <div className={styles.productSinglePic}>
            <img src={sharjer}/>
        </div>
        <div>
            <h4>دبلیو یو دبلیو / شارژر تبلت و  موبایل دبلیو یو دبلیو</h4>
            <h2>شارژر دیواری همراه باکابل usbو با سایر تجهیزات جانبی </h2>
            <div className={styles.desceller}>
            <div className={styles.productSingleCenter}>
                <p>WUW T42 wall charger with USB-C cable_____________________________</p>
                <div><FaStar/>
                <span>4(77)</span> 
                <span>.74 دیدگاه </span>
                <span>.17 پرسش</span>
                <div>
                    <FaThumbsUp/>
                    <span>78% (40) نفر از خریداران این کالا را پیشنهاد کرده اند.</span>
                    <span style={{border: "1px solid gray"}}><FaInfo/> </span>
                </div>
                <div>
                    <p>رنگ: سفید </p>
                </div>
                <div style={{border: "1px solid blue"}}><BiCheck/></div>
                <p>درخواست مرجوع کردن کالا در گروه شارژر تبلت و موبایل با دلیل "انصراف از خرید" تنها در صورتی قابل تایید است که کالا در شرایط اولیه باشد (در صورت پلمپ بودن، کالا نباید باز شده باشد).</p>
                
                </div>
            </div>
      <div className={styles.productSingleCeller}>
        <div className={styles.celler}>
            <span>فروشنده</span>
            <span>یک فروشنده دیگر</span>
        </div>
        <div className={styles.trade}>            
        <p>بازرگانی مهرسام</p>
        <h5>83% رضایت کالا | عملکدد خیلی خوب </h5>           
        </div>
        <Link to='/'>
        <button className={styles.basket}>افزودن به سبد</button>
        </Link>
      </div>
      </div>
            </div>
      </div>
   
      
    </div>
  )
}

export default ProductSingle
