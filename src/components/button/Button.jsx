"use client";
import styles from "./Button.module.css";

const Button = ({ title, handleClick }) => {
    console.log("item clicked");
  return <button onClick={handleClick}>{title}</button>;
};

export default Button;
