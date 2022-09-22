import React from "react";
import {IInputProps} from "./Input.props";

import styles from './Input.module.scss';

const Input = (props: IInputProps) => {
    return (
        <div className={styles.Input}>
            {props.children}
        </div>
    );
};

export {Input};
