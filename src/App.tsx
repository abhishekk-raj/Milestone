import React, { useEffect } from "react";
import "./App.scss";
import UseMemoHook from "./examples/UseMemoHook";
import UseReducerHook from "./examples/UseReducerHook";

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
      <UseReducerHook />
    </div>
  );
}

export default App;
