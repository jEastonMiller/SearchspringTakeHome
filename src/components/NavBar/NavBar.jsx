import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../../public/assets/logo.png"

function NavBar() {
    return (
      <header className={styles.navBar}>
        <div className={styles.logo}>
          <h2>Midwest</h2>
          <img src={logo}></img>
          <h2>Farmhouse</h2>

          <nav id={styles.mainNav}>
            <ul>
              <li><a>Home</a></li>
              <li><a>Products</a></li>
              <li><a>About Us</a></li>
              <li><a>Contact</a></li>
            </ul>
          </nav>
        </div>
        
        <button id={styles.cartButton}>Cart</button>
      </header>
    )
}

export default NavBar