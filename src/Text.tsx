import React from "react";

import { TextProps } from "../index";

const Text: React.FunctionComponent<TextProps> = ({
  className,
  children,
  size,
  weight,
}) => {
  className = className || "";
  size = size || "small";
  weight = weight || "normal";
  return (
    <p className={`type type--pos-${size}-${weight} ${className}`}>
      {children}
    </p>
  );
};

export default Text;
