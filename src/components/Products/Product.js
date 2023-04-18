import React from 'react';
import styles from './Product.module.css';

const Product = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={styles.content}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>Price: ${props.price}</p>
        <div className={styles.actions}>
          <button onClick={props.onAdd}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
