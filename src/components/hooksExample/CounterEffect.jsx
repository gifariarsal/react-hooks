// useEffect example
import React, { useEffect, useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You clicked ${count} times`);
  }, [count]);

  return (
    <main>
      <h1>useEffect Example</h1>
      <p>
        You clicked <span>{count}</span> times
      </p>
      <p style={{ fontSize: "16px", fontStyle: "italic", color: "gray" }}>
        Open console to see the side effect
      </p>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </main>
  );
};

export default CounterEffect;
