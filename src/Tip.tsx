import React from "react";

import { TipProps } from "../index";
import { Icon } from "./";

const Text: React.FunctionComponent<TipProps> = ({
  className,
  children,
  iconName,
  iconText,
  iconColor
}) => {
  className = className || "";
  return (
    <div className={`onboarding-tip ${className}`}>
      {iconName && (
        <div className="onboarding-tip__icon">
          <Icon name={iconName} color={iconColor} text={iconText} />
        </div>
      )}
      <div className="type onboarding-tip__msg">{children}</div>
    </div>
  );
};

export default Text;
