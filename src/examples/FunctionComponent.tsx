import React, { useState } from "react";

interface IProps {
  propsIn: string;
}

export const FunctionComponent: React.FC<IProps> = ({ propsIn }) => {
  const [firstName, setFirstName] = useState("Abhishek");
  const [lastName, setLastName] = useState("Raj");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({ firstName, lastName });
  };

  return (
    <div>
      {/* <h1>FunctionComponent</h1>
      <h2>Name: {name}</h2>
      <p>Props in : {propsIn}</p> */}

      {/* <form>
        <label>Name</label>
        <input
          name="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          name="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form> */}

      {/* 2nd method to use form */}

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          name="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
