import { createSlice } from "@reduxjs/toolkit";  
import cini from '../../assets/image/cini.jpg'       
export const CartSlice = createSlice({
 name: "Cart",
 initialState: {
    items:[
      // {count:5, src:cini}
    ]
 },               
 reducers:{
   //  addtoCart: (state, action)=>{
   //      const p = state.items.findIndex(item=>item.id === action.payload.id)
   //      if(p >= 0){
   //       // state.items.map(item=> item.id ===action.payload.id?
   //       //    {...item, count:item.count+1}:{item})
   //          state.items[p].count++
   //       }
   //       else{
   //          state.items.push({...action.id, count:1})
   //       }
   //    }, 
   addtoCart: (state, action) => {
      const p = state.items.findIndex((item) => item.id === action.payload.id);      
      if (p >= 0) {
        state.items[p].count++
       
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
       
    },              
    decrease: (state, action)=>{
      const p = state.items.findIndex(item => item.id === action.payload.id)
      if(p>-1){
         let value = state.items[p].count;              
         if(value -1){
            state.items[p].count = state.items[p].count-1
         }
         else{
            state.items.splice(p, 1)
         }
      }
    }, 
            
    remove:(state, action)=>{
      const p = state.items.findIndex(item=>item.id === action.payload.id)
      if(p>-1){
         state.items.splice(p, 1)
      }
    }
 }
})
export const {addtoCart, decrease, remove} = CartSlice.actions
export default CartSlice.reducer