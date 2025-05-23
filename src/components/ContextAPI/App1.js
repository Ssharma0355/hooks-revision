import React, { createContext, useState } from 'react'
import Child from './Child';

const userContext = createContext();


function App1() {
 const [data,setData]= useState(
  {
    id:1,
    name:"Sachin Sharma",
    role:"Frontend Developer",
    working:false

  }
 )
  return (
    <userContext.Provider value={data} >
        <Child />
    </userContext.Provider>
  );
}

export default App1
export {userContext}
