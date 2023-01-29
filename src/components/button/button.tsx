import React from "react";
import "./button.css";

type ButtonProps = {
  text: string;
};

const Button = (props: ButtonProps) => {
  return <button>{props.text}</button>;
};

export { Button };
