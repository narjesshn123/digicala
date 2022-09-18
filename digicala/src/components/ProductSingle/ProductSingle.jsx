import React from 'react'
import styles from './ProductSingle.style.module.css'
import ProductSingleLine from './ProductSingleLine'
import ProductSingleIcon from './ProductSingleIcon'
import { useEffect, useState } from 'react'
import sharjer from '../../assets/image/sharjer.jpg'  
import { FaStar, FaThumbsUp, FaInfo,  } from 'react-icons/fa'  
import { BiCheck } from "react-icons/bi"; 
import { Link } from 'react-router-dom' 
import { useParams } from 'react-router-dom'
import Categories from '../Category/Categories'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../../redux/reducers/Cart.reducer'
import WithSpinner from '../WithSpinner/WithSpinner'
import { getProduct } from '../../api/Products.api'

const ProductSingle = ({user}) => {
  // let id = Math.floor(Math.random()*10)
 
  // let {id} = useParams()
  const dispatch = useDispatch(); 
  const handleAddtoCart = (user) =>{
    dispatch(addtoCart(user))
    // console.log(user+ "userrrrrrrrrrrrrr");
  }           
  // const[user, setUser] = useState({})
  // let [user, setUser] = useState({})

  // useEffect(() => {
  //   fetch('/api/users/' + id)
  //     .then(res => { return res.json()})
  //     .then((data) => {setUser(data.user)}) }, 
  //      [id])
 
  return (
    <div>            
      <div className={styles.productSingleLeft} key={user.id}>
        <div className={styles.productSingleIcon}>
            <h3>user </h3>
           <div><ProductSingleIcon/></div>
        </div>
        <div className={styles.productSinglePic}>
            <img src={user.pic}/>
        </div>
        <div>
            
            <div className={styles.desceller}>
            <div className={styles.productSingleCenter}>
              
                <div><FaStar/>
               
                <div>
                    <FaThumbsUp/>
                   
                    <span style={{border: "1px solid gray"}}><FaInfo/> </span>
                </div>
                <div>
                    <p>رنگ: سفید </p>
                </div>
                <div style={{border: "1px solid blue"}}><BiCheck/></div>
               
                </div>
            </div>
      <div className={styles.productSingleCeller}>
        <div className={styles.celler}>
            <span>فروشنده</span>
            <span>یک فروشنده دیگر</span>
        </div>
        <div className={styles.trade}>            
       {user.price}
        <h3>{user.name}</h3>          
        </div>             
        <button onClick={(()=>handleAddtoCart(user))} className={styles.basket}>افزودن به سبد</button>
     
      </div>
      </div>
            </div>
      </div>
   
    
       {/* {user.pic} */}
    </div>
  )
}

export default WithSpinner(ProductSingle, getProduct)
