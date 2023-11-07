import React, { useState, useEffect } from "react";
import { Product } from "../../components/components";


function ProductDisplay( { productList }) {

    useEffect(() => {
      
    }, [])

    return (
      <div>
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