import React from 'react';
import Product from './Product';
import styles from '../styles/ProductList.module.css'

const ProductList = ({productList}) => {
  console.log(productList)
  return(
    <div className={styles.rowContainer}>
      <h5>Product Name</h5>
      <div className={styles.row}>
          {
            productList.length && productList.map((product, i) => {
              return <Product key={i} product={product} />
            })
          }
      </div>
    </div>  
  )
};

export default ProductList;
