import React, { useEffect } from "react";
import "./App.scss";
import { ClassComponent } from "./examples/ClassComponent";
import { FunctionComponent } from "./examples/FunctionComponent";

function App() {
  let name = "Abhishek";

  useEffect(() => {
    // Make some change on component render
  }, []);

  const changeName = () => {
    name = "Sohan";
    console.log(name);
  };

  return (
    <div className="App">
      <p>{name}</p>
      <button onClick={changeName}>Change Name</button>
      <ClassComponent />
      <FunctionComponent />
    </div>
  );
}

export default App;
