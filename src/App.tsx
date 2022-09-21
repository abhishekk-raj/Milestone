import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Todo from "./components/todo/Todo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/" element={<Navigate replace to="/sign-in" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
