import React from "react";
import { Varients } from "../enums/varients";
import { getColor } from "../methods/get-color.method";
import styles from "./Card.module.scss";
import colorVarients from "../../../styles/color-varients.module.scss";
import { ICardProps } from "./Card.props";

const Card = (props: ICardProps) => {
  const style = {
    backgroundColor: getColor(props.varient),
    color:
      props.varient === Varients.Light
        ? colorVarients.msColorDark
        : colorVarients.msColorWhite,
  };
  return (
    <div style={style} className={styles.Card}>
      {props.children}
    </div>
  );
};

const CardHeader = (props: any) => {
  return <div className={styles.CardHeader}>{props.children}</div>;
};

const CardBody = (props: any) => {
  return <div className={styles.CardBody}>{props.children}</div>;
};

const CardTitle = (props: any) => {
  return <h1 className={styles.CardTitle}>{props.children}</h1>;
};

const CardSubtitle = (props: any) => {
  return <p className={styles.CardSubtitle}>{props.children}</p>;
};

const CardFooter = (props: any) => {
  return (
    <div className={styles.CardFooter}>
      <hr />
      {props.children}
    </div>
  );
};

export { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardFooter };
