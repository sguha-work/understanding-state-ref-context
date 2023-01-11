import { useEffect, useRef, useState } from "react";
import CounterContext from "../contexts/Counter_context";
import Child from "./Child_component";
function Parent() {
    const [counter, setCounter] = useState(0);
    const x = useRef(0);
    
    useEffect(() => {
      window.setInterval(() => {
        x.current = x.current + 1;
        setCounter(x.current);
      }, 1000);
    }, []);
  
    return (
      <CounterContext.Provider value={counter}>
      <div className="App">
        <h1>parent component</h1>
        <label>value--{counter}</label>
        <Child></Child>
      </div>
      </CounterContext.Provider>
    );
  }
  export default Parent;
  