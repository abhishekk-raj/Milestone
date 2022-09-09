import React, { CSSProperties, useState } from "react";
import { ITodoListProps } from "../models/todo-list.props";
import TodoGridItem from "./TodoGridItem";
import TodoListItem from "./TodoListItem";

const TodoList: React.FC<ITodoListProps> = ({todoList}) => {
  const [isListView, setIsListView] = useState<boolean>(true);
  const [flexDirection, setFlexDirection] = useState("column");

  const style: CSSProperties = {
    display: "flex",
    flexDirection: flexDirection === "column" ? "column" : "row",
  };

  const updateViewType = () => {
    isListView ? setIsListView(false) : setIsListView(true);
    isListView ? setFlexDirection("row") : setFlexDirection("column");
  };

  return (
    <div>
      <button onClick={updateViewType}>
        Show {isListView ? "Grid" : "List"} View
      </button>

      <div style={style}>
        {todoList.map((name: string, index: number) => {
          return isListView ? (
            <TodoListItem key={index} name={name} />
          ) : (
            <TodoGridItem key={index} name={name} />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
