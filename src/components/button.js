import React from "react";
import Button from "react-bootstrap/Button";
/* import * as styles from "../styles/sortingVisualizer.module.css"; */

export default function ButtonComponent({ text, ...rest }) {
  /* const handleLog = (e) => {
    e.preventDefault();
    console.log(rest);
  }; */

  return <Button {...rest}>{text}</Button>;
}
