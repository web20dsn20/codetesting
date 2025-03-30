import React, { useState } from "react";

const CounterWithValues = () => {
  const [countHistory, setCountHistory] = useState([]);

  const addCountToHistory = (newCount) => {
    setCountHistory((prevHistory) => [...prevHistory, newCount]);
  };

  return (
    <div>
      <h3>Count History</h3>
      <button onClick={() => addCountToHistory(5)}>Add 5</button>
      <button onClick={() => addCountToHistory(10)}>Add 10</button>
      <button onClick={() => addCountToHistory(15)}>Add 15</button>
      <ul>
        {countHistory.map((count, index) => (
          <li key={index}>{count}</li>
        ))}
      </ul>
    </div>
  );
};

export default CounterWithValues;
