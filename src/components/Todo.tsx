import React, { useState } from "react";
import InputField from "./InputField";
import TodoList from "./TodoList";

import styles from ".././App.module.scss";

const Todo = () => {
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
};

export default Todo;
