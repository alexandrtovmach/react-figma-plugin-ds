import React from "react";

import { TextProps } from "../index";

const Text: React.SFC<TextProps> = ({
  className,
  children,
  size = "small",
  weight = "normal"
}) => {
  return (
    <p className={`type type--pos-${size}-${weight} ${className}`}>
      {children}
    </p>
  );
};

export default Text;
