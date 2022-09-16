import React, { useRef } from "react";
import { IInputField } from "../models/input-field.props";

const InputField: React.FC<IInputField> = ({
  todo,
  setTodo,
  handleInputForm,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const styles = {
    padding: "0.5rem",
    margin: "0.5rem",
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleInputForm(e);
          inputRef.current?.focus();
        }}
      >
        <input
          style={styles}
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
