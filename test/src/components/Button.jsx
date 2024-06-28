import React, { useState } from 'react'

function Button() {
    const [count,setCount]=useState(0);
    const handleUp=()=>{
        setCount(count+1)
        
    }
    const handleDown=()=>{
        setCount(count-1)
        
    }
    return (
    <div>
      <button onClick={handleUp}>Increase</button>
      <h1>{count}</h1>
      <button onClick={handleDown}>Decrease</button>
    </div>
  )}
export default Button;
