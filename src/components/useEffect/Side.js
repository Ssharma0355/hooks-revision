import React, { useEffect, useState } from 'react'

function Side() {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log("Componet got mounted")

        return function(){
            console.log("Component got unmount")
        }
    },[]); //empty dependecies means whole component 

    useEffect(()=>{
        console.log("Component got updated",count)

        return ()=>{
            console.log("Counter return",count)
        }
    },[count]); // 



  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase + </button>
        <button onClick={()=>setCount(count-1)}>Decrease - </button>
      
    </div>
  )
}

export default Side
