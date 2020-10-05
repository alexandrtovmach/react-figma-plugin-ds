import React from "react";

import { LabelProps } from "../index";

const Label: React.FunctionComponent<LabelProps> = ({
  className,
  children,
  size,
  weight,
}) => {
  className = className || "";
  size = size || "small";
  weight = weight || "normal";
  return (
    <div className={`label type--pos-${size}-${weight} ${className}`}>
      {children}
    </div>
  );
};

export default Label;
