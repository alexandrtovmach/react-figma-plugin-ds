import React from "react";

import { TextProps } from "../index";

const Text: React.FunctionComponent<TextProps> = ({
  className,
  children,
  size,
  weight,
}) => {
  className = className || "";
  const sizeClass = size && `type--${size}`;
  const weightClass = weight && `type--${weight}`;
  return (
    <p className={`type ${sizeClass} ${weightClass} ${className}`}>
      {children}
    </p>
  );
};

export default Text;
