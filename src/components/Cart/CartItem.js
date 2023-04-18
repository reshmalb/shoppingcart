import React from 'react';
import styles from './Cartitem.module.css';

const CartItem = (props) => {


  return (
    
        <div className={styles['cart-item__details']}>
          <h4>{props.title}</h4>
          <p> ${props.price.toFixed(2)}</p>
          <p>{props.quantity}</p>
          <p>{props.totalprice}</p>
          <div className={styles['cart-item__buttons']}>
            <button onClick={props.onAdd}>+</button>            
            <button onClick={props.onRemove}>-</button>
          </div>
     
     
      </div>)
};

export default CartItem;
