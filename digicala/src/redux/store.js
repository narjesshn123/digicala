import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './reducers/Cart.reducer'
export default configureStore({
    reducer:{
        cart: CartReducer
    },             
});                 