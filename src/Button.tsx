import React from "react";

import { ButtonProps } from "../index";

const Button: React.SFC<ButtonProps> = ({
  children,
  isSecondary,
  isDisabled,
  onClick,
  isDestructive
}) => {
  const level = isSecondary ? "secondary" : "primary";
  const modificator = isDestructive ? "-destructive" : "";

  return (
    <button
      onClick={onClick}
      className={`button button--${level}${modificator}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
