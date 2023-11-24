// useState example
import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <h1>useState Example</h1>
      <p>
        You clicked <span>{count}</span> times
      </p>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </>
  );
};

export default Counter;
