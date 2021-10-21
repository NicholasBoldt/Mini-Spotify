import React from 'react'
import classes from "./Card.module.css";

type CardProps = {
  className: string;
  children?: React.ReactChild | React.ReactChild[];
};

const Card = (props: CardProps) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
