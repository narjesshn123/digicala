import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addtoCart, remove, decrease } from '../../redux/reducers/Cart.reducer'
import styles from './Cart.style.module.css'
import { BiMinus, BiPlus, BiTrash } from 'react-icons/bi'
import Auth from '../../api/localStorage'
import Withauth from '../PrivateRoute/PrivateRoute'
const isLogin = Auth.checklogin()
const Cart = () => {
  const items = useSelector(state => state.cart.items)
  const total_price = useSelector((state)=>state.cart.items.reduce
((price, item) => price + (item.price*item.count),0)) 

const total_count = useSelector((state) => state.cart.items.reduce((count, item)=>
count + item.count, 0))
const dispatch = useDispatch()
  return (
            <div className="cart">
         
         <section class="py-5">
                <div class="container px-4 px-lg-5 my-5">
                <div class="row">
                <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                   
                    <div class="table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col" class="border-0 bg-light">
                            <div class="p-2 px-3 text-uppercase">Product</div>
                            </th>
                            <th scope="col" class="border-0 bg-light">
                            <div class="py-2 text-uppercase">Price</div>
                            </th>
                            <th scope="col" class="border-0 bg-light">
                            <div class="py-2 text-uppercase">Quantity</div>
                            </th>
                            <th scope="col" class="border-0 bg-light">
                            <div class="py-2 text-uppercase">plus decrease</div>
                            </th>
                            <th scope="col" class="border-0 bg-light">
                            <div class="py-2 text-uppercase">Remove</div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                          {items.map(item=>(

                          
                        <tr key={item.id}>
                            <th scope="row" class="border-0">
                            <div class="p-2">
                                <img src={item.pic} alt="" width="70" class="img-fluid rounded shadow-sm" />
                                <div class="ms-3 d-inline-block align-middle">
                                <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">{item.tittle}</a></h5>
                                </div>
                            </div>
                            </th>
                            <td class="border-0 align-middle"><strong>{item.price}</strong></td>
                            <td class="border-0 align-middle"><strong>{item.count}</strong></td>
                            <td class="border-0 align-middle">
                              <a href="#" class="text-dark">
                                <span onClick={()=>dispatch(addtoCart(item))}><BiPlus/></span>
                                <span>{item.count}</span>
                                <span onClick={()=>dispatch(decrease(item))}><BiMinus/></span>
                             
                              </a>
                              <span>{item.price * item.count}</span>
                              </td >
                              <td class="border-0 align-middle" onClick={()=>dispatch(remove(item))}>
           
           <BiTrash/>
                              </td>
                        </tr>
                       
                       ))}
                        </tbody>
                    </table>
                    </div>
                   
                </div>
                </div>
                <div class="row py-5 p-4 bg-white rounded shadow-sm">
                <div class="col-lg-6">
                    <div class="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Instructions for seller</div>
                    <div class="p-4">
                    <p class="mb-4"><em>If you have some information for the seller you can leave them in the box below</em></p>
                    <textarea name="" cols="30" rows="2" class="form-control"></textarea>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Order summary </div>
                    <div class="p-4">
                    <p class="mb-4"><em>all product</em></p>
                    <ul class="list-unstyled mb-4">
                        <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">QUANTITY</strong><strong>{total_count}</strong></li>
                        <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                        <h5 class="fw-bold"> {total_price}</h5>
                        </li>
                    </ul><a href="#" class="btn btn-dark rounded-pill py-2 d-md-block">Procceed to checkout</a>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
  )
}

export default Withauth(Cart, isLogin)