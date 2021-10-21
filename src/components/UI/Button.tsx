import React from 'react'
import classes from "./Button.module.css";

type ButtonProps = {
    type?: any,
    onClick?: () => void,
    children?: React.ReactChild | React.ReactChild[],
    className?: string
}

const Button = (props: ButtonProps) =>
 {
 return <button className={props.className ? `${classes.button} ${classes[props.className]}` : classes.button} type={props.type || 'button'} onClick={props.onClick}>{props.children}</button>
 }

 export default Button;