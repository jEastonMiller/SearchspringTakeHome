import React, { useEffect, useState } from "react";
import styles from "./Product.module.css";

function Product( {
      thumbnail,
      name,
      price,
      msrp,
    }) {
    const [prodMsrp, setProdMsrp] = useState(parseInt(msrp));
    const [prodPrice, setProdPrice] = useState(parseInt(price));
    const [msrpActive, setMsrpActive] = useState(false)
    
    useEffect(() => {
      if(prodMsrp - prodPrice > 0) setMsrpActive(true); 
    }, [])  

    return (
      <div className={styles.product}>
        <img src={thumbnail}></img>
        <p>{name}</p>
        <div className={styles.costSection}>
          <p className={styles.price}>${price}</p>
          {msrpActive && <p className={styles.msrp}><s>${prodMsrp}</s></p>}
        </div>
      </div>
    )
}

export default Product