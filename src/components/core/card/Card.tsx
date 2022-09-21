import React from "react";
import styles from "./Card.module.scss";

const Card = (props: any) => {
  return <div className={styles.Card}>{props.children}</div>;
};

const CardHeader = (props: any) => {
  return <div className={styles.CardHeader}>{props.children}</div>;
};

const CardBody = (props: any) => {
  return <div className={styles.CardBody}>{props.children}</div>;
};

const CardFooter = (props: any) => {
  return (
    <div className={styles.CardFooter}>
      <hr />
      {props.children}
    </div>
  );
};

export { Card, CardHeader, CardBody, CardFooter };
