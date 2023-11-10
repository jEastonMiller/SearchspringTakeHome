import React from "react";
import styles from "./Footer.module.css";
import logo from "../../../public/assets/logo.png"

function Footer( { goHome } ) {
  return (
    <div className={styles.footer}>
      <div 
        onClick={(e) => goHome()}
        className={styles.logo}
      >
        <h2>Midwest</h2>
        <img src={logo}></img>
        <h2>Farmhouse</h2>
      </div>
      <nav id={styles.footerLinks}>
        <ul>
          <li
            onClick={goHome}
          ><a>Home</a></li>
          <li><a>Products</a></li>
          <li><a>About Us</a></li>
          <li><a>Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Footer