import React from "react";

import { ButtonProps } from "../index";

const Button: React.FunctionComponent<ButtonProps> = ({
 children,
  className,
  isSecondary,
  isTertiary,
  isDisabled,
  onClick,
  isDestructive,
  ...htmlButtonProps
}) => {
  className = className || "";
  const level = isTertiary ? "tertiary" : isSecondary ? "secondary" : "primary";
  const modificator = isDestructive ? "-destructive" : "";
  if (isSecondary && isTertiary) {
    console.warn(
      `Use only one level modificator "isSecondary" or "isTertiary"`
    );
  }

  return (
    <button
      {...htmlButtonProps}
      onClick={onClick}
      className={`button button--${level}${modificator} ${className}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
