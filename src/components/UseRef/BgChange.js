import React, { useRef, useState } from 'react'

function BgChange() {
    const [count, setCount] = useState(0);
    const bgRef = useRef();

    const changeColor =()=>{
        bgRef.current.style.backgroundColor = "red";
    }
  return (
    <div>
        <button 
        ref={bgRef}
        
        >Click me change</button>
        <br /><br /><br />

        <button onClick={changeColor}>Change color by click</button>


      
    </div>
  )
}

export default BgChange
