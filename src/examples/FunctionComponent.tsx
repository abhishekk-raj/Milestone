import React, { useState } from "react";

interface IProps {
  propsIn: string;
}

export const FunctionComponent: React.FC<IProps> = ({ propsIn }) => {
  const [name] = useState("Vikram");
  return (
    <div>
      <h1>FunctionComponent</h1>
      <h2>Name: {name}</h2>
      <p>Props in : {propsIn}</p>
    </div>
  );
};
