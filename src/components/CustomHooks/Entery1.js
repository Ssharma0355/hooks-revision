import React from 'react'
import useWindowWidth from './useWindowWidth'

function Entery1() {
    const width = useWindowWidth();
  return (
    <div>
      <h1>Window resize</h1>
      <p>{width}px</p>
    </div>
  );
}

export default Entery1
