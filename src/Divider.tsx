import React from "react";

import { DividerProps } from "../index";

const Divider: React.FunctionComponent<DividerProps> = ({ className }) => {
  className = className || "";
  return <div className={`divider ${className}`} />;
};

export default Divider;
