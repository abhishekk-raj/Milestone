import React, { useEffect } from "react";
import "./App.scss";
import { FunctionComponent } from "./examples/FunctionComponent";

function App() {
  // let name = "Abhishek";

  useEffect(() => {
    // Make some change on component render
  }, []);

  // const changeName = () => {
  //   name = "Sohan";
  //   console.log(name);
  // };

  return (
    <div className="App">
      {/*<p>{name}</p>
      <button onClick={changeName}>Change Name</button>
       <ClassComponent propsIn="Class component"/>
      <FunctionComponent propsIn="Function component" /> */}
      {/* <UseMemoHook /> */}
      {/* <UseReducerHook /> */}
      <FunctionComponent propsIn="Function component" />
    </div>
  );
}

export default App;
