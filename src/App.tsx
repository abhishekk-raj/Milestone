import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/" element={<Navigate replace to="/sign-in" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
