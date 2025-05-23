import React, { useCallback, useEffect, useRef, useState } from 'react'

function ExpensiveCalculation() {
    const [count, setCount] = useState(0);
    const [text,setText] =  useState('');
    const prevFunRef = useRef(null); //to check the funtion refrence is changed or not with the help of useRef
    // it re-creates the fn when we wrtie text and also when we click on count
    //  const expensiveOperation = ()=>{
    //     console.log("Running expensive calculation!")
    //     let result = 0;
    //     for(let i =0;i<100000000000000;i++){
    //        return result+=i;
    //     }
    //     return result
    //  }

    const expensiveOperation = useCallback(()=>{
        console.log("Expensive caluction is going....")
        let result =0;
        for(let i=0;i<1000000000;i++){
            return result+=i;
        }
        return result;
    }, [count]);

    useEffect(() => {
        if(prevFunRef.current){ //checking is perv fn value is valid or not 
            if(prevFunRef.current === expensiveOperation){ //if prev fun have same reference 
                console.log("Function is not re-created");
            }
            else{
                console.log("Funtion is re-created") //if prev fun have some other refrence 
            }
        }
        else{
            prevFunRef.current = expensiveOperation; //if prev fun value is not there then gove the current refrece value
        }


    }, [expensiveOperation]);
  return (
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <div>
            <h1>Expensive operation result :{expensiveOperation()}</h1>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment COunt</button>
        </div>
    </div>
  )
}

export default ExpensiveCalculation
