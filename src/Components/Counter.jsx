import React, { useState } from "react";

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount((pre) => pre + 1);
  };
  const decrement = () => {
    setCount((pre) => pre - 1);
  };
  const restart = () => {
    setCount(0);
  };
  const switchsigns = () => {
    setCount((pre) => pre * -1);
  };
  return (
    <div>
      Count : <h3 data-testid="count">{count}</h3>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={restart}>Restart</button>
        <button onClick={switchsigns}>Switchsigns</button>
      </div>
    </div>
  );
};

export default Counter;
