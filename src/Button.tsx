import React from "react";

import { ButtonProps } from "../index";

const Button: React.SFC<ButtonProps> = ({
  children,
  secondary,
  disabled,
  destructive
}) => {
  const level = secondary ? "secondary" : "primary";
  const modificator = destructive ? "-destructive" : "";

  return (
    <button
      className={`button button--${level}${modificator}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
