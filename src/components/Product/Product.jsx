import React, { useEffect, useState } from "react";
import styles from "./Product.module.css";

function Product( {
      thumbnail,
      name,
      price,
      msrp,
      handleAddToCart,
      cart
    }) {
    const [prodMsrp, setProdMsrp] = useState(parseInt(msrp));
    const [prodPrice, setProdPrice] = useState(parseInt(price));
    const [msrpActive, setMsrpActive] = useState(false)
    
    useEffect(() => {
      if(prodMsrp - prodPrice > 0) setMsrpActive(true); 
    }, [])  

    return (
      <div className={styles.product}>
        <img src={thumbnail} alt={name}></img>
        <div>
          <p className={styles.name}>{name}</p>
          <div className={styles.productDetails}>
            <div className={styles.costSection}>
              <p className={styles.price}>${price}</p>
              {msrpActive && <p className={styles.msrp}><s>${prodMsrp}</s></p>}
            </div>
            <button
              onClick={(e) => handleAddToCart({
                thumbnail,
                name,
                price,
                msrp,
              }, cart)}
            >Add To Cart</button>
          </div>
        </div>
        
        
      </div>
    )
}

export default Product