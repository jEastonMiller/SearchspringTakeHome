import React, { useEffect, useState } from "react";
import styles from "./Searchbar.module.css";

function Searchbar({ setSearchQuery, handleTest }) {
  const [currentInput, setCurrentInput] = useState('');

  const handleOnChange = (event) => {
    setCurrentInput(event.target.value)
  }

  return (
    <div className={styles.searchbar}>
        <input
          onChange={handleOnChange}
          value={currentInput}
        ></input>
        <button
          onClick={(e) => setSearchQuery(currentInput)}
        >Search</button>
    </div>
  )
}

export default Searchbar