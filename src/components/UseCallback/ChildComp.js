import React from 'react'

const ChildComp = React.memo((props)=> { // it will not re-render until and unless there is funtion it can stop only value
    console.log("Child re-render here!")
  return (
    <div>
      <button onClick={props.handleClick}>{props.name}</button>
    </div>
  );
});

export default ChildComp
