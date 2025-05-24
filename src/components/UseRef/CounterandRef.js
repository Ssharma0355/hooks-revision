import React, { useRef, useState } from 'react'

function CounterandRef() {
    const [count, setCount] = useState(0);
    const val = useRef(0);
    function handleClick(){
        // let val = 0;
        val.current= val.current+1;
        console.log("Val : ", val.current);
        setCount(count+1);
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleClick}>Click here!</button>

      
    </div>
  )
}

export default CounterandRef
