import './App.css';
import React, { useState } from 'react';

// import Posts from './Posts';
// import ResizeComponent from './ResizeComponent';
import UseMemoExample from './UseMemoExample';

function App() {
  //normal version of useState
  const [count, setCount] = useState(0);

  //function version of useState
  const [value, setValue] = useState(() => {
    // console.log("function version of useState")
    return "vip";
  });

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
    setValue("decremented");
  }

  const increment = () => {
    setCount(prevCount => prevCount + 1);
    setValue("incremented");
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      {value}
      {/* <ResizeComponent /> */}
      <UseMemoExample />
    </>
  );
}

export default App;
