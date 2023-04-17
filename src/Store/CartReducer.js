import { createSlice } from "@reduxjs/toolkit";

const initialCart={cartdetails:[],isCartVisible:false};

const cartSlice=createSlice({
    name:'cart',
    initialState:initialCart,
    reducers:{
             addTocart(state,action){
                state.cartdetails=[...state,action.payload]
             },
             visibleCart(state){
                state.isCartVisible= !state.isCartVisible;
             }

    }
});

export const  cartActions=cartSlice.actions;
export default cartSlice.reducer;