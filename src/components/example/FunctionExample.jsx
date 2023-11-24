import React from "react";

const FunctionExample = () => {
  const [name, setName] = React.useState("");
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>
    </>
  );
};

export default FunctionExample;
