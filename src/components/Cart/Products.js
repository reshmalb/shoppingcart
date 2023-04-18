import React from 'react';
import Product from './Product';
import classes from './Products.module.css'

const Products = (props) => {
  return (
    <div className={classes.productList}>
      {props.items.map((item) => (
        <Product
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
          onAdd={() => props.onAdd(item)}
        />
      ))}
    </div>
  );
};

export default Products;
