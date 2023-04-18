import React from 'react';
import Products from './Products';
import styles from './ProductList.module.css';
const productList = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is a description for product 1',
      image: 'https://via.placeholder.com/150',
      price: 10.99,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is a description for product 2',
      image: 'https://via.placeholder.com/150',
      price: 19.99,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is a description for product 3',
      image: 'https://via.placeholder.com/150',
      price: 7.99,
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'This is a description for product 4',
      image: 'https://via.placeholder.com/150',
      price: 25.99,
    },
    {
        id: 5,
        name: 'Product 5',
        description: 'This is a description for product 5',
        image: 'https://via.placeholder.com/150',
        price: 25.99,
      },
      {
        id: 6,
        name: 'Product 6',
        description: 'This is a description for product 6',
        image: 'https://via.placeholder.com/150',
        price: 25.99,
      },
      {
        id:7,
        name: 'Product 7',
        description: 'This is a description for product 7',
        image: 'https://via.placeholder.com/150',
        price: 25.99,
      },
      {
        id: 8,
        name: 'Product 8',
        description: 'This is a description for product 8',
        image: 'https://via.placeholder.com/150',
        price: 25.99,
      },
      {
        id: 9,
        name: 'Product 9',
        description: 'This is a description for product 9',
        image: 'https://via.placeholder.com/150',
        price: 25.99,
      },
      {
        id: 10,
        name: 'Product 10',
        description: 'This is a description for product 10',
        image: 'https://via.placeholder.com/150',
        price: 25.99,
      },

  ];
  

const ProductList = () => {    
  return (
    <div className={styles.container}>
      <h2>Products</h2>
      <div className={styles.list}>
        <Products items={productList} />
      </div>
    </div>
  );
};

export default ProductList;
