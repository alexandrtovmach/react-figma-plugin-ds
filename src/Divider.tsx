import React from "react";

import { DividerProps } from "../index";

const Divider: React.SFC<DividerProps> = ({ className = "" }) => {
  return <div className={`divider ${className}`} />;
};

export default Divider;
