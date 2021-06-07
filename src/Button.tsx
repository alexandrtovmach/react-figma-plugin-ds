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
  type,
}) => {
  className = className || "";
  type = type || "submit";
  const level = isTertiary ? "tertiary" : isSecondary ? "secondary" : "primary";
  const modificator = isDestructive ? "-destructive" : "";
  if (isSecondary && isTertiary) {
    console.warn(
      `Use only one level modificator "isSecondary" or "isTertiary"`
    );
  }

  return (
    <button
      onClick={onClick}
      className={`button button--${level}${modificator} ${className}`}
      disabled={isDisabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
