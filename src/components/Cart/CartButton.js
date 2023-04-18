import React from "react";
import classes from  './CartButton.module.css'
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/CartReducer";
const CartButton=(props)=>{
    const dispatch=useDispatch();
    const cartVisibleHandler=()=>{
        dispatch(cartActions.visibleCart())
      }
      

    const cartItemsCount=5;
    return(
        <button onClick={cartVisibleHandler}>
          Cart
        <span className={classes.header__cartbadge}>{cartItemsCount}</span>
      </button>
    )
}

export default CartButton;