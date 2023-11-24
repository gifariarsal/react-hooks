// useRef example
import React, { useEffect, useRef, useState } from "react";

const InputName = () => {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <h1>useRef Example</h1>
      <input
        type="text"
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>
        Name: <span>{name}</span>
      </p>
    </>
  );
};

export default InputName;
