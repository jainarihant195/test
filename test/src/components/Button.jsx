import React from 'react'

function Button() {
    const handleSubmit=()=>{
        alert('Button clicked');
    }
    return (
    <div>
      <button onClick={handleSubmit}>Submmit</button>
    </div>
  )}
export default Button;
