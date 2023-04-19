import { createSlice } from "@reduxjs/toolkit";

const initialCart={
                    cartdetails:[],
                    totalQuantity:0, 
                    change:false
                     
                 };

const cartSlice=createSlice({
    name:'cart',
    initialState:initialCart,
    reducers:{
             addTocart(state,action){
               state.change=true;
               console.log("total quantity",state.totalQuantity);
               const newCartItem=action.payload;
               console.log("newcart",newCartItem );
               state.totalQuantity=state.totalQuantity+1;
               const existItem=state.cartdetails.find((item)=>item.id===newCartItem.id);
               console.log("total quantity",state.totalQuantity);

               if(!existItem){
                  state.cartdetails.push({
                     id:newCartItem.id,
                     title:newCartItem.title,
                     price:newCartItem.price,
                     quantity:1,
                     totalprice:newCartItem.price,
                  })
               }else{
                  existItem.quantity++;
                  existItem.totalprice=existItem.totalprice+newCartItem.price

               }


               
             },
             removeFromCart(state,action){
               state.change=true;
               const id=action.payload;
               state.totalQuantity--;
               const existitem=state.cartdetails.find((item)=>item.id===id)
               if(existitem.quantity===1){
                  state.cartdetails=state.cartdetails.filter( (item)=>
                           item.id!==id                  
                  )
               }
               else{
                  existitem.quantity--;
                  existitem.totalprice=existitem.totalprice-existitem.price;
               }

             },
             replaceCart(state,action){
               state.totalQuantity = action.payload.totalQuantity;
               state.cartdetails =action.payload.cartdetails;
             },
           
    }
});

export const  cartActions=cartSlice.actions;
export default cartSlice.reducer;