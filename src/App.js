import { React, useState } from 'react'
import './App.css'
 
export default function App() {
  const [counter, setCounter] = useState(0);
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
  //decrease counter
  const decrease = () => {
    if (counter > 0) {
    setCounter(count => count - 1);
    }
  };
  return (
    <div className="container">
      <div className="counter">
        <h1>Counter</h1>
        <div className="btn__container">
          <button className="control__btn" onClick={decrease}>-</button>
          <span className="counter__output">{counter}</span>
          <button className="control__btn" onClick={increase}>+</button>
        </div>
      </div>
    </div>
  );
}