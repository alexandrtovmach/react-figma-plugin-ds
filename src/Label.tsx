import React from "react";

import { LabelProps } from "../index";

const Label: React.FunctionComponent<LabelProps> = ({
  className,
  children,
  size,
  weight,
}) => {
  className = className || "";
  const sizeClass = size && `type--${size}`;
  const weightClass = weight && `type--${weight}`;

  return (
    <div className={`label ${sizeClass} ${weightClass} ${className}`}>
      {children}
    </div>
  );
};

export default Label;
