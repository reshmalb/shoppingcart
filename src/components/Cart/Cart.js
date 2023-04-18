import React from "react";
import CartItem from "./CartItem";
import { cartActions } from "../../Store/CartReducer";
import { useDispatch, useSelector,usedispatch } from "react-redux";
import styles from './Cart.module.css'

const Cart=()=>{
    const cartItem=useSelector((state)=>state.cart.cartdetails)
    console.log("cartdetails:",cartItem)
    const dispatch=useDispatch();
    const total=cartItem.reduce((acc,curr)=>
                acc=acc+curr.totalprice,
          0);
          const totalAmount=total.toFixed(2);

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
          return    (<CartItem key={item.id}             
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              totalprice={item.totalprice} 
              onAdd={addToCartHandler.bind(null,item)}
              onRemove={removeFromCartHandler.bind(null,item.id)} />)}
         )}
          <div className={styles['cart-item__total']}>
          <div className={styles['cart-item__total-text']}>Total Amount:</div>
             <div className={styles['cart-item__total-amount']}>${totalAmount}</div>
          </div>
        <button className={styles.close} >Purcahse</button>
      
      
        </div>
        
      
        </div>
      
    )
}

export default Cart;