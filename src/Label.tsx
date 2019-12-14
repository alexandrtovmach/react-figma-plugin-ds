import React from "react";

import { LabelProps } from "../index";

const Label: React.SFC<LabelProps> = ({
  className = "",
  children,
  size = "small",
  weight = "normal"
}) => {
  return (
    <div className={`label type--pos-${size}-${weight} ${className}`}>
      {children}
    </div>
  );
};

export default Label;
