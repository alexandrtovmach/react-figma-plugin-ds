import React from "react";

import { TextareaProps } from "../index";

const Textarea: React.FunctionComponent<TextareaProps> = ({
  className,
  rows = 2,
  defaultValue,
  placeholder,
  isDisabled,
  onChange,
}) => {
  className = className || "";
  return (
    <textarea
      rows={rows}
      className={`textarea ${className}`}
      placeholder={placeholder}
      defaultValue={defaultValue}
      disabled={isDisabled}
      onChange={(event) => onChange && onChange(event.target.value, event)}
    />
  );
};

export default Textarea;
