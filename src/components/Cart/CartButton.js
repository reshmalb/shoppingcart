import React from "react";
import classes from  './CartButton.module.css'
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Store/CartReducer";
import { UIActions } from "../../Store/UI-Slice";
const CartButton=(props)=>{
    const dispatch=useDispatch();
    const cartVisibleHandler=()=>{
        dispatch(UIActions.showCart())
      }
      

    const cartItemsCount=useSelector((state)=>state.cart.totalQuantity)

    console.log("count",cartItemsCount);
    return(
        <button onClick={cartVisibleHandler}>
          Cart
        <span className={classes.header__cartbadge}>{cartItemsCount}</span>
      </button>
    )
}

export default CartButton;