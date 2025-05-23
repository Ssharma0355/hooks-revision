import React, { createContext, useState } from 'react'
import Child1 from './Child1';

const useTheme = createContext();

function App2() {
    const [theme, setTheme] = useState(true);
    const [count, setCount] = useState(0);

  return (
    <div>
      <useTheme.Provider value={{ theme, setTheme, count, setCount }}>
        <div className={theme ? "light" : "dark"}>
            <h1>{count}</h1>
          <Child1 />
        </div>
      </useTheme.Provider>
    </div>
  );
}

export default App2
export {useTheme}
