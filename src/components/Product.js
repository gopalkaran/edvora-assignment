import React from 'react';
import styles from '../styles/Product.module.css'

const Product = () => {
  return(
  <article className={styles.card}>
      <img className={styles.cardImg} src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='product image' />
      <div className={styles.cardBasic}>
          <h6>Product Name</h6>
          <small>Brand Name</small>
          <h6>$ 29.99</h6>
      </div>
      <div className={styles.cardExtra}> 
          <div>
              <small>Location</small>
              <small>Date: 10/12/2021</small>
          </div>
          <small>Description of the Product/Item</small>
      </div>
  </article>
  )
};

export default Product;
