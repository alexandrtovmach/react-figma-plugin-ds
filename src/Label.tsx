import React from "react";

import { LabelProps } from "../index";

const Label: React.SFC<LabelProps> = ({ className = "", children }) => {
  return <div className={`label ${className}`}>{children}</div>;
};

export default Label;
