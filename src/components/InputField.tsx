import React, { useRef } from "react";
import { IInputField } from "../models/input-field.props";

const InputField: React.FC<IInputField> = ({
  todo,
  setTodo,
  handleInputForm,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleInputForm(e);
          inputRef.current?.focus();
        }}
      >
        <input
          ref={inputRef}
          type="input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter new name"
        />
        <button type="submit">Add Name</button>
      </form>
    </div>
  );
};

export default InputField;
