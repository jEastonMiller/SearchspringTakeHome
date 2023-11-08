import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../../public/assets/logo.png"

function NavBar( { goHome, trendingList } ) {
    return (
      <header className={styles.navBar}>
        <div 
          onClick={(e) => goHome()}
          className={styles.logo}
        >
          <h2>Midwest</h2>
          <img src={logo}></img>
          <h2>Farmhouse</h2>

          <nav id={styles.mainNav}>
            <ul>
              <li
                onClick={(e) => goHome()}
              ><a>Home</a></li>
              <li><a>Products</a></li>
              <li><a>About Us</a></li>
              <li><a>Contact</a></li>
            </ul>
          </nav>
        </div>
        <div
          id={styles.cartDisplay}
        >
          <button id={styles.cartButton}></button>
          <p>0</p>
        </div>
        
      </header>
    )
}

export default NavBar