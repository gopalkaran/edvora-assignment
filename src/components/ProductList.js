import React, {useEffect, useState} from 'react';
import Product from './Product';
import styles from '../styles/ProductList.module.css'

const ProductList = ({name,productList}) => {
  const [categorizedList, setCategorizedList] = useState([])
  console.log(productList)
  useEffect(()=>{
    const modifiedList = productList.filter(product => product.brand_name === name)
    setCategorizedList(modifiedList)
  }, [name])
  
  return(
    <div className={styles.rowContainer}>
      <h5>{name}</h5>
      <div className={styles.row}>
          {
            categorizedList.length && categorizedList.map((product, i) => {
              return <Product key={i} product={product} />
            })
          }
      </div>
    </div>  
  )
};

export default ProductList;
