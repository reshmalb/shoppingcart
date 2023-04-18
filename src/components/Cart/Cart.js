import React from "react";
import CartItem from "./CartItem";
import { cartActions } from "../../Store/CartReducer";
import { useDispatch, useSelector,usedispatch } from "react-redux";
import styles from './Cart.module.css'

const Cart=()=>{
    const cartItem=useSelector((state)=>state.cart.cartdetails)
    const dispatch=useDispatch();
    const total=cartItem.reduce((acc,curr)=>
                acc=acc+curr.totalprice,
          0);

     const addToCartHandler=(item)=>{
          dispatch(cartActions.addTocart({
                    id:item.id,
                    title:item.title,
                    price:item.price,
                    quantity:1,

          }))

     }     
     const removeFromCartHandler=(id)=>{
      dispatch(cartActions.removeFromCart(id))

     }
    
    return(
       <div className={styles.overlay}>
      
      <div className={styles['cart-item']}>
      <h3><u>Your Shopping Cart</u></h3>
                 
        {cartItem.map((item)=>{
              (<CartItem key={item.id}             
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              totalprice={item.totalprice} 
              onAdd={addToCartHandler.bind(null,item)}
              onRemove={removeFromCartHandler.bind(null,item.id)} />)}
         )}
           <h4>Total Amount:{total}</h4> 
        <button className={styles.close} >Purcahse</button>
      
      
        </div>
        
      
        </div>
      
    )
}

export default Cart;