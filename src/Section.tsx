import React from "react";

import { SectionProps } from "../index";

const Section: React.SFC<SectionProps> = ({ className = "", children }) => {
  return <div className={`section-title ${className}`}>{children}</div>;
};

export default Section;
