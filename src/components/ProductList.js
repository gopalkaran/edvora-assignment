import React from 'react';
import Product from './Product';
import styles from '../styles/ProductList.module.css'

const ProductList = () => {
  return(
    <div className={styles.rowContainer}>
      <h5>Product Name</h5>
      <div className={styles.row}>
          <Product />
          <Product />
          <Product />
          <Product />
      </div>
    </div>  
  )
};

export default ProductList;
