import React from 'react';
import Product from './Product';
import classes from './Products.module.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/CartReducer';

const Products = (props) => {
  const dispatch=useDispatch();
  const onAddtoCartHandler=(item)=>{
      dispatch(cartActions.addTocart({
        id:item.id,
        title:item.description,
        price:item.price,
        quantity:1,
      }))

  }
  return (
    <div className={classes.productList}>
      {props.items.map((item) => (
        <Product
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
          onAdd={onAddtoCartHandler.bind(null,item)}
        />
      ))}
    </div>
  );
};

export default Products;
