import { createSlice } from "@reduxjs/toolkit";  
export const CartSlice = createSlice({
 name: "Auth",
 initialState: {
    accessToken:"",
    refreshToken:"",
    isLogin: false,
 },               
 reducers:{
   login: (state, action) =>{
    state.accessToken = state.payload.accessToken;
    state.refreshToken = state.payload.refreshToken;
    state.isLogin = true;             
   },
   logout: (state, action) => {
      state.accessToken = "";           
      state.refreshToken = "";           
      state.isLogin = false;                         
    },              
    setA: (state, action)=>{
      
    }, 
   
 }
})
export const {addtoCart, decrease, remove} = CartSlice.actions
export default CartSlice.reducer