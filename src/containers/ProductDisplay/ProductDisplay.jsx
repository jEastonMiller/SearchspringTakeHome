import React, { useState, useEffect } from "react";
import { Product } from "../../components/components";
import styles from "./ProductDisplay.module.css";

function ProductDisplay( { productList, handleAddToCart, cart }) {
  const [searchSuccess, setSearchSuccess] = useState(true)

  useEffect(() => {
    if(productList.length !== 0) setSearchSuccess(true)
  }, [searchSuccess])

  if (productList.length === 0) return (<h1 className={styles.productDisplay}>No Results :/</h1>)
  return (
    <div className={styles.productDisplay}>
      {productList.map((product) => 
        <Product 
          thumbnail={product.thumbnailImageUrl}
          name={product.name}
          price={product.price}
          msrp={product.msrp}
          handleAddToCart={handleAddToCart}
          cart={cart}
          key={product.id}
        />
      )}  
    </div>
  )
}

export default ProductDisplay;