import React from 'react';
import styles from './Cartitem.module.css';

const CartItem = ({ item, onAdd, onRemove }) => {

  const onAddHandler=()=>{
  
  }

  const onRemovehandler=()=>{
  }

  return (
    <div className={styles['cart-item']}>
      <div className={styles['cart-item__details']}>
        <h3>name</h3>
        <p>Price: </p>
        <div className={styles['cart-item__buttons']}>
          <button onClick={onAddHandler}>+</button>
          <span>quantity</span>
          <button onClick={onRemovehandler}>-</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
