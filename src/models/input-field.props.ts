import React from "react";

export interface IInputField {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleInputForm: (e: React.FormEvent) => void;
}
