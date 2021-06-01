import './App.css';
import React, { useReducer } from 'react';

function reducer(state, action) {

  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }

    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }
}

function App() {
  //normal version of useState
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  //function version of useState
  // const [value, setValue] = useState(() => {
  // console.log("function version of useState")
  //   return "vip";
  // });

  const decrement = () => {
    dispatch({ type: 'decrement' })
  }

  const increment = () => {
    dispatch({ type: 'increment' })
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default App;
