import React, { useState } from 'react'
import Side from './Side'

function Effect() {
    const [state, setState] = useState(true);
  return (
    <div>
        <button onClick={()=>setState(!state)}>Toogle</button>
        {state ?  <Side /> : <h1>Empty</h1>}
     
    </div>
  )
}

export default Effect
