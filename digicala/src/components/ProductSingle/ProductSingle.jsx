import WithSpinner from '../WithSpinner/WithSpinner'
import styles from '../../views/AmazingSingle/AmazingSingle.style.module.css'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../../redux/reducers/Cart.reducer'
import { getProduct } from '../../api/Products.api'
const ProductSingle = ({user}) => {
  const dispatch = useDispatch(); 
  const handleAddtoCart = (user) =>{
    dispatch(addtoCart(user))
    // console.log(user+ "userrrrrrrrrrrrrr");
  }  
  return (
    <div className={styles.AmazingSingle}>
      <div className={styles.details}>
      <div className={styles.big_img}>
      <img src={user.pic} alt=""/>  
      </div>         
      <div className={styles.box}>
      <div className={styles.row}>
          <h2>{user.tittle}</h2>
        <p>{user.description}</p>
        <p>{user.content}</p>
        <span>{user.price}</span>

        </div>
       
        {/* <div className={styles.thumb}>
          <img 
          src={product.pic} 
          alt=""/>       
        </div> */}
        <button onClick={(()=>handleAddtoCart(user))}  className={styles.cart}>Add to cart</button>
        </div>   
      </div>
      
    </div>
  )
}

export default WithSpinner(ProductSingle, getProduct)
