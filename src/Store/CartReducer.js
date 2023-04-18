import { createSlice } from "@reduxjs/toolkit";

const initialCart={isCartVisible:false,
                    cartdetails:[],
                    totalQuantity:0, 
                     
                 };

const cartSlice=createSlice({
    name:'cart',
    initialState:initialCart,
    reducers:{
             addTocart(state,action){

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
             visibleCart(state){
                state.isCartVisible= !state.isCartVisible;
             }

    }
});

export const  cartActions=cartSlice.actions;
export default cartSlice.reducer;