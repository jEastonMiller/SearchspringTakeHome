import React from "react";
import styles from "./NavBar.module.css";

function NavBar() {
    return (
      <header className={styles.navBar}>
        <img></img>
        <nav id={styles.mainNav}>
          <ul>
            <li><a>Home</a></li>
            <li><a>Products</a></li>
            <li><a>About Us</a></li>
            <li><a>Contact</a></li>
          </ul>
        </nav>
        <button>Cart</button>
      </header>
    )
}

export default NavBar