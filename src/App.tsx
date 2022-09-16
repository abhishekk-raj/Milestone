import React, { useState } from "react";
import styles from "./App.module.scss";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<string[]>([
    "abhishek",
    "abhinav",
    "ruplai",
  ]);

  const handleInputForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodoList([...todoList, todo]);
      setTodo("");
    }
  };

  return (
    <div className={`${styles.App} ${styles.TextGrey}`}>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleInputForm={handleInputForm}
      />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
