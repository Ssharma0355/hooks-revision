import React, { useRef, useState } from 'react'

function StopWatch() {
    const [time, setTime] =useState(0);
    const timerRef = useRef(null);

    const startTimer =()=>{
       timerRef.current = setInterval(()=>{
            setTime(time =>time+1);
        },1000)
    }
    const stopTimer =()=>{
        clearInterval(timerRef.current);
        timerRef.current = null;
    }
    const resetTimer=()=>{
        stopTimer();
        setTime(0);
    }
  return (
    <div>
      <h1>Time - {time} secs</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default StopWatch
