import React, { useEffect, useState, useRef } from "react";
import styles from "./Searchbar.module.css";

function Searchbar({ setSearchQuery, searchQuery }) {
  const [currentInput, setCurrentInput] = useState(searchQuery);

  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  const focus = () => {
    inputRef.current.focus();
  };

  const handleOnChange = (event) => {
    setCurrentInput(event.target.value)
  }

  const handleKeyDown = e => {    
    if (e.key === 'Enter') buttonRef.current.click();  
  };

  useEffect(() => {
    focus();
  },[])

  useEffect(() => {
    setCurrentInput(searchQuery)
  }, [searchQuery])

  return (
    <div 
      data-cy="searchbar"
      className={styles.searchbar}
    >
        <input
          data-cy="searchInput"
          onChange={handleOnChange}
          onClick={focus}
          onKeyDown={handleKeyDown}
          value={currentInput}
          autoCapitalize="none"
          ref={inputRef}
        ></input>
        <button
          data-cy="searchButton"
          onClick={(e) => setSearchQuery(currentInput)}
          ref={buttonRef}
        ></button>
    </div>
  )
}

export default Searchbar