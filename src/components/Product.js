import React from 'react';
import styles from '../styles/Product.module.css'
import { useEffect, useState } from 'react';

const Product = ({product}) => {
  const [date, setDate] = useState('') 
  useEffect(()=>{
     let timeArray = product.time.split('T')
     let date = timeArray[0]
     setDate(date)
  }, [product.time])
  return(
  <article className={styles.card}>
      <img className={styles.cardImg} src={product.image} alt={product.product_name} />
      <div className={styles.cardBasic}>
          <h6>{product.product_name}</h6>
          <small>{product.brand_name}</small>
          <h6>$ {product.price}</h6>
      </div>
      <div className={styles.cardExtra}> 
          <div>
              <small>{product.address.city}, {product.address.state}</small>
              <small>Date: {date}</small>
          </div>
          <small>{product.discription}</small>
      </div>
  </article>
  )
};

export default Product;
