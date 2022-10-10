import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addtoCart, remove, decrease } from '../../redux/reducers/Cart.reducer'
import styles from './Cart.style.module.css'
import { BiMinus, BiPlus, BiTrash } from 'react-icons/bi'
import Auth from '../../api/localStorage'
// import Withauth from '../PrivateRoute/PrivateRoute'
import { useState } from 'react'
import { useEffect } from 'react'
// import { useNavigate } from "react-router-dom"; 

// const isLogin = Auth.checklogin()
const Cart = () => {
  // const[log, setLog] = useState(isLogin)
  // let navigate = useNavigate();
  const items = useSelector(state => state.cart.items)
  const total_price = useSelector((state)=>state.cart.items.reduce
((price, item) => price + (item.price*item.count),0)) 

const total_count = useSelector((state) => state.cart.items.reduce((count, item)=>
count + item.count, 0))
const dispatch = useDispatch()

  return (
         
         <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                <div className="row">
                <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                   
                    <div className="table-responsive">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col" className="border-0 bg-light">
                            <div className="p-2 px-3 text-uppercase">Product</div>
                            </th>
                            <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Price</div>
                            </th>
                            <th scope="col" className="border-0 bg-light">
                            <div class="py-2 text-uppercase">Quantity</div>
                            </th>
                            <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">plus decrease</div>
                            </th>
                            <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Remove</div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                          {items.map(item=>(

                          
                        <tr key={item.id}>
                            <th scope="row" className="border-0">
                            <div className="p-2">
                                <img src={item.pic} alt="product" width="70" className="img-fluid rounded shadow-sm" />
                                <div class="ms-3 d-inline-block align-middle">
                                <h5 className="mb-0"> {item.tittle}</h5>
                                </div>
                            </div>
                            </th>
                            <td className="border-0 align-middle"><strong>{item.price * item.count}</strong></td>
                            <td className="border-0 align-middle"><strong>{item.count}</strong></td>
                            <td className="border-0 align-middle">
                              {/* <a className="text-dark"> */}
                                <span onClick={()=>dispatch(addtoCart(item))}><BiPlus/></span>
                                <span>{item.count}</span>
                                <span onClick={()=>dispatch(decrease(item))}><BiMinus/></span>
                             
                              {/* </a> */}
                              <span>{item.price * item.count}</span>
                              </td >
                              <td className="border-0 align-middle" onClick={()=>dispatch(remove(item))}>
           
           <BiTrash/>
                              </td>
                        </tr>
                       
                       ))}
                        </tbody>
                    </table>
                    </div>
                   
                </div>
                </div>
                <div className="row py-5 p-4 bg-white rounded shadow-sm">
                <div className="col-lg-6">
                    <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Instructions for seller</div>
                    <div className="p-4">
                    <p className="mb-4"><em>If you have some information for the seller you can leave them in the box below</em></p>
                    <textarea name="" cols="30" rows="2" class="form-control"></textarea>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Order summary </div>
                    <div cclassName="p-4">
                    <p className="mb-4"><em>all product</em></p>
                    <ul class="list-unstyled mb-4">
                        <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">QUANTITY</strong><strong>{total_count}</strong></li>
                        <li className="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                        <h5 className="fw-bold"> {total_price}</h5>
                        </li>
                    </ul><a className="btn btn-dark rounded-pill py-2 d-md-block">Procceed to checkout</a>
                    </div>
                </div>
                </div>
            </div>
            </section>            
  )
}

export default Cart