import React from "react";

import { IconProps } from "../index";

const Icon: React.SFC<IconProps> = ({
  name,
  color,
  text,
  isSelected,
  isDisabled,
  onClick
}) => {
  const iconClass = !text ? `icon--${name}` : "icon--text";
  const colorClass = color ? `icon--${color}` : "";
  const selectedClass = isSelected ? "icon--selected" : "";

  if (onClick) {
    return (
      <button
        style={{
          backgroundColor: !isSelected ? "transparent" : ""
        }}
        disabled={isDisabled}
        onClick={onClick}
        className={`icon icon--button ${iconClass} ${colorClass} ${selectedClass}`}
      >
        {text}
      </button>
    );
  } else {
    return (
      <div className={`icon ${iconClass} ${colorClass} ${selectedClass}`}>
        {text}
      </div>
    );
  }
};

export default Icon;
