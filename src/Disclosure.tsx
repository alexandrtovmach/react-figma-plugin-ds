import React, { useState } from "react";

import { DisclosureProps } from "../index";

const Disclosure: React.FunctionComponent<DisclosureProps> = ({
  isDefaultExpanded,
  className,
  label,
  children,
  isSection,
  onExpand,
}) => {
  const [isExpanded, onExpandedChange] = useState(Boolean(isDefaultExpanded));
  const toggleExapndState = () => {
    onExpand && onExpand(!isExpanded);
    onExpandedChange(!isExpanded);
  };

  const labelClass = isSection ? "disclosure--section" : "";
  const expandClass = isExpanded ? "disclosure--expanded" : "";

  return (
    <div className={`disclosure ${className || ""}`}>
      <div className={`disclosure__item ${expandClass}`}>
        <div
          className={`disclosure__label ${labelClass}`}
          onClick={toggleExapndState}
        >
          {label}
        </div>
        <div className="disclosure__content">{children}</div>
      </div>
    </div>
  );
};

export default Disclosure;
