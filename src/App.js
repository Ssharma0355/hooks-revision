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
import StopWatch from './components/UseRef/StopWatch';
import Entry from './components/HOC/Entry';
import Entery1 from './components/CustomHooks/Entery1';
import LazyComp from './components/LazyLoading/LazyComp';
import EnterClass from './components/LifecycleMethod/EnterClass';

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
      {/* <CounterandRef /> */}

      {/* stop watch with help of useRef  */}
      {/* <StopWatch /> */}

      {/* High order function example of authentication  */}
      {/* <Entry /> */}

      {/* custom hooks example  */}
      {/* <Entery1 /> */}

      {/* lazy loading and suspense exaplme */}
      {/* <LazyComp /> */}

      {/* life-cycle-method in class component  */}
      <EnterClass />

    </div>
  );
}

export default App;
