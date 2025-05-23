import React, { useContext } from 'react'
import { useTheme } from './App2'

function LastChild() {
    const {theme, setTheme, count, setCount} = useContext(useTheme);
    const handleChange=()=>{
        setTheme(!theme)
    }
  return (
    <div>
      <button onClick={handleChange}>
        Change to {theme ? "Dark" : "Light"}
      </button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrese</button>
    </div>
  );
}

export default LastChild
