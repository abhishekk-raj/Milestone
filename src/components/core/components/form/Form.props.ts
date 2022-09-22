import { ReactNode } from "react";

export interface IInputProps {
  children?: ReactNode;
  type: string;
  valid?: boolean;
  name?: string;
  id?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ILabel {
  id?: string;
  children?: ReactNode;
}
