import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addtoCart, remove, decrease } from '../../redux/reducers/Cart.reducer'
import styles from './Cart.style.module.css'
import { BiMinus, BiPlus, BiTrash } from 'react-icons/bi'
const Cart = () => {
  const items = useSelector(state => state.cart.items)
  const total_price = useSelector((state)=>state.cart.items.reduce
((price, item) => price + (item.price*item.count),0)) 

const total_count = useSelector((state) => state.cart.items.reduce((count, item)=>
count + item.count, 0))
const dispatch = useDispatch()
  return (
    <div className={styles.Cart}>                      
      <div className={styles.Cart_Items}>
        {
         items.map(item => (
          <div key={item.id} className={styles.Cart_item}>
          <div className={styles.Cart_item_image}>
            <img width={'100%'} src={item.pic} alt="product"/>        
            </div>
           <div className={styles.Cart_item_info}>
            <div>{item.tittle}</div>
            <div>{item.description}</div>
           </div>
           <div onClick={()=>dispatch(addtoCart(item))}><BiPlus/></div>
           <div>{item.count}</div>
           <div onClick={()=>dispatch(decrease(item))}><BiMinus/></div>
           <div>{item.price * item.count}</div>
           <div onClick={()=>dispatch(remove(item))}><BiTrash/></div>
            </div>
          ))
        }
        
        </div>
        <div>تعداد محصولات: {total_count} محصول </div>
        <div>مبلغ قابل پرداخت : {total_price}</div>
    </div>
  )
}

export default Cart
