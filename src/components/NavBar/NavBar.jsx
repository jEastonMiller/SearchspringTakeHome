import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import logo from "../../../public/assets/logo.png"

function NavBar( { goHome, trendingList, cartCount, handleCartClick } ) {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleToggleMenu = () => menuToggle ? setMenuToggle(false) : setMenuToggle(true);

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
              onClick={goHome}
            ><a>Home</a></li>
            <li><a>Products</a></li>
            <li><a>About Us</a></li>
            <li><a>Contact</a></li>
          </ul>
        </nav>
      </div>
      {menuToggle && 
        <div 
          id={styles.mobileMenu} 
        >
          <ul>
            <li onClick={goHome}><a>Home</a></li>
            <li><a>Products</a></li>
            <li><a>About Us</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>}
      <button className={styles.mobileMenuButton} onClick={handleToggleMenu}></button>
      <div
        id={styles.cartDisplay}
      >
        <button 
          onClick={(e) => handleCartClick()}
          id={styles.cartButton}
        ></button>
        <p>{cartCount}</p>
      </div>
    </header>
  )
}

export default NavBar