import React from "react";
import { IInputProps, ILabel } from "./Form.props";

import styles from "./Form.module.scss";

const Input = (props: IInputProps) => {
  return (
    <input
      id={props.id}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      className={styles.Input}
      onChange={props.onChange}
    >
      {props.children}
    </input>
  );
};

const Label = (props: ILabel) => {
  return (
    <label id={props.id} className={styles.Label}>
      {props.children}
    </label>
  );
};

export { Input, Label };
