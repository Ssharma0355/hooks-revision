import React, { act, useReducer } from 'react'

function Counter1() {
      const reducer = (state, action) => { // reducer takes 2 value (state and the action it performs)
        if (action.type === "Increment") {
          return state + 1;
        } else if (action.type === "Decrement") {
          return state - 1;
        }
      };
    const [state, dispatch] = useReducer(reducer,0); //state, dispatch gives the action and reducer fn , intial value
  return (
    <div>
      <h1>{state}</h1>
      {/* dispatch the action of type */}
      <button onClick={() => dispatch({ type: "Increment" })}>
        Increment +
      </button>
      {/* dispatch the action of type */}
      <button onClick={() => dispatch({ type: "Decrement" })}>
        Decrement -
      </button>
    </div>
  );
}

export default Counter1
