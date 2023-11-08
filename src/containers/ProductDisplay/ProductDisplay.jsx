import React, { useState, useEffect } from "react";
import { Product } from "../../components/components";
import styles from "./ProductDisplay.module.css";

function ProductDisplay( { productList }) {

    useEffect(() => {
      
    }, [])

    return (
      <div className={styles.productDisplay}>
        {productList.map((product) => 
          <Product 
            thumbnail={product.thumbnailImageUrl}
            name={product.name}
            price={product.price}
            msrp={product.msrp}
            key={product.id}
          />
        )}  
      </div>
    )
}

export default ProductDisplay;