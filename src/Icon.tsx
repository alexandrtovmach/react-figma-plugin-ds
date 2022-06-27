import React from "react";

import { IconProps } from "../index";

const Icon: React.FunctionComponent<IconProps> = ({
  className,
  name,
  color,
  text,
  isSelected,
  isDisabled,
  onClick,
  iconButtonProps,
}) => {
  className = className || "";
  const iconClass = text ? "" : `icon--${name}`;
  const colorClass = !isDisabled && color ? `icon--${color}` : "icon--black-3";
  const selectedClass = isSelected ? "icon-button--selected" : "";

  if (onClick) {
    return (
      <button
        {...iconButtonProps}
        style={{
          padding: 0,
          cursor: "default",
        }}
        disabled={isDisabled}
        onClick={onClick}
        className={`icon-button ${selectedClass} ${className}`}
      >
        <div className={`icon ${iconClass}`}>{text}</div>
      </button>
    );
  } else {
    return (
      <div className={`icon ${iconClass} ${colorClass} ${className}`}>
        {text}
      </div>
    );
  }
};

export default Icon;
