import React from 'react';
import styles from './Cartitem.module.css';

const CartItem = (props) => {


  return (
        <div>
        <div className={styles['cart-item__details']}>
          <h4>{props.title}</h4>
          <p>Price: ${props.price}</p>
          <p>Quantity:{props.quantity}</p>
          <p>Amount: ${props.totalprice}</p>
          <div className={styles['cart-item__buttons']}>
            <button onClick={props.onAdd}>+</button>
            
            <button onClick={props.onRemove}>-</button>
          </div>
        </div>
     
      </div>)
};

export default CartItem;
