import React, { useCallback, useState } from 'react'
import ChildComp from './ChildComp';

function Calling() {
  const [count, setCount] = useState(0);

  // after every re-render and state updation it make a new refrence and get re-render the child component
  // const handleClick = ()=>{
  //     setCount(count+1);
  // }



//   useCallback freezes the funtional refrenece and not let child componet re-render 
  const handleClick =useCallback(()=>{ 
      setCount(count+1);
  },[]);
// same as useEffect if the dependecy is empty it will pasue at one rerender and if we put any of dependecy it will re-render as the valve will update
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click me !</button>

      <div>
        <br />
        <ChildComp name={"Click me here!"} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Calling
