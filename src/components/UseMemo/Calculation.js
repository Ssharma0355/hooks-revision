import React, { useMemo, useState } from 'react'

function Calculation() {
    const [count,setCount] = useState(0);
    const [input, setInput] = useState(0);
    const expensiveCalcualtion = (num)=>{
        for(let i=0;i<1000000000;i++){
           
        }
         return num * 2;
    }
    // const doubleValue = expensiveCalcualtion(input);

    const doubleValue = useMemo(() => expensiveCalcualtion(input), [input]); //fn(old value memo),[new value when updated dependecy]
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase </button>
      <input type="number" value={input} onChange={(e)=>setInput(e.target.value)} />
      <h1> Double value: {doubleValue}</h1>
    </div>
  );
}

export default Calculation
