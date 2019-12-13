import React from "react";

import { IconProps } from "../index";

const Icon: React.SFC<IconProps> = ({ name, color, text }) => {
  const iconClass = !text ? `icon--${name}` : "icon--text";
  const colorClass = color ? `icon--${color}` : "";
  return <div className={`icon ${iconClass} ${colorClass}`}>{text}</div>;
};

export default Icon;
