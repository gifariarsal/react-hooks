// useState example
import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </>
  );
};

export default Counter;
