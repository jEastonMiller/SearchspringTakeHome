import React, { useEffect, useState, useRef } from "react";
import styles from "./Searchbar.module.css";

function Searchbar({ setSearchQuery, handleTest }) {
  const [currentInput, setCurrentInput] = useState('');

  const inputRef = useRef(null);

  const focus = () => {
    inputRef.current.focus();
  };

  const handleOnChange = (event) => {
    setCurrentInput(event.target.value)
  }

  const handleKeypress = e => {    
    if (e.keyCode === 13) handleSubmit();  
  };

  useEffect(() => {
    focus();
  },[])

  return (
    <div className={styles.searchbar}>
        <input
          onChange={handleOnChange}
          onClick={focus}
          value={currentInput}
          ref={inputRef}
        ></input>
        <button
          onClick={(e) => setSearchQuery(currentInput)}
          
        ></button>
    </div>
  )
}

export default Searchbar