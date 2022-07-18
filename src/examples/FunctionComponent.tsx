import React, { useState } from "react";

export const FunctionComponent = () => {
  const [name] = useState("Vikram");
  return (
    <div>
      <h1>FunctionComponent</h1>
      <h2>Name: {name}</h2>
    </div>
  );
};
