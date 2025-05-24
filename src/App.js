import './App.css';
import Effect from './components/useEffect/Effect';
import Counter from './components/useState/Counter';
import App1 from './components/ContextAPI/App1';
import App2 from './components/UseContextBig/App2';
import Counter1 from './components/UseReducer/Counter1';
import Calculation from './components/UseMemo/Calculation';
import Calling from './components/UseCallback/Calling';
import ExpensiveCalculation from './components/UseCallbackSecondExample/ExpensiveCalculation';
import CounterandRef from './components/UseRef/CounterandRef';

function App() {
  return (
    <div className="App">
      {/* useState */}
      {/* <Counter /> */}

      {/* useEffect */}
      {/* <Effect /> */}

      {/* context api */}
      {/* <App1 /> */}

      {/* useContexBigExample */}
      {/* <App2 /> */}

      {/* useReducer example */}
      {/* <Counter1 /> */}

      {/* useMemo */}
      {/* <Calculation /> */}

      {/* useCallback  */}
      {/* <Calling /> */}

      {/* useCallback 2nd example of expensive operation */}
      {/* <ExpensiveCalculation /> */}

      {/* useRef  */}
      <CounterandRef />

    </div>
  );
}

export default App;
