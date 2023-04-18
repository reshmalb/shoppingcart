import React from "react";
import classes from  './CartButton.module.css'
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Store/CartReducer";
const CartButton=(props)=>{
    const dispatch=useDispatch();
    const cartVisibleHandler=()=>{
        dispatch(cartActions.visibleCart())
      }
      

    const cartItemsCount=useSelector((state)=>state.cart.totalQuantity)
    return(
        <button onClick={cartVisibleHandler}>
          Cart
        <span className={classes.header__cartbadge}>{cartItemsCount}</span>
      </button>
    )
}

export default CartButton;