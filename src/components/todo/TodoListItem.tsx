import React from "react";
import { ITodoListItemProps } from "../../models/todo-list-item.props";

const TodoListItem: React.FC<ITodoListItemProps> = ({ name }) => {
  return (
    <div
      style={{
        color: "white",
        background: "green",
        padding: "0.5rem",
        margin: "0.5rem",
        width: "100%",
        flexDirection: "row",
      }}
    >
      {name}
    </div>
  );
};

export default TodoListItem;
