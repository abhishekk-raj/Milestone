import React from "react";
import { ITodoListItemProps } from "../../models/todo-list-item.props";

const TodoGridItem: React.FC<ITodoListItemProps> = ({ name }) => {
  return (
    <div
      style={{
        color: "white",
        background: "green",
        padding: "2.5rem",
        margin: "0.5rem",
        flex: "1",
      }}
    >
      {name}
    </div>
  );
};

export default TodoGridItem;
