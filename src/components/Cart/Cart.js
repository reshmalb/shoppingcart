import React from "react";
import CartItem from "./CartItem";
import { cartActions } from "../../Store/CartReducer";
import { useSelector,usedispatch } from "react-redux";
import styles from './Cart.module.css'

const Cart=()=>{
    const cartItem=useSelector((state)=>state.cart.cartdetails)
    const total=cartItem.reduce((acc,curr)=>
                acc=acc+curr.totalprice,
          0);

     const addToCartHandler=(item)=>{

     }     
     const removeFromCartHandler=(id)=>{

     }
    
    return(
        <div className={styles.overlay}>
        <div className={styles['cart-item']}>
         {cartItem.map((item)=>{
              (<CartItem key={item.id}             
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              totalprice={item.totalprice} 
              onAdd={addToCartHandler.bind(null,item)}
              onRemove={removeFromCartHandler.bind(null,item.id)} />)}
         )}
        </div>
        <h4>Total Amount:{total}</h4>   
        <button className={styles.close} >Purcahse</button>

        </div>
    )
}

export default Cart;