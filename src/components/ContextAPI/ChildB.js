import React from 'react'
import { useContext } from 'react'
import { userContext } from './App1'

function ChildB() {
    const data = useContext(userContext)
  return (
    <div>
      <h1>Hello {data.name} </h1>
      <p>I know you are good {data.role} !!!</p>
      {data.working ? <p>Great that you are working!! </p>: <p>Please Start from monday with your full pace!!</p>}
    </div>
  )
}

export default ChildB
