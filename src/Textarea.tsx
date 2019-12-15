import React from "react";

import { TextareaProps } from "../index";

const Textarea: React.SFC<TextareaProps> = ({
  className = "",
  rows = 2,
  cols = 2,
  defaultValue,
  placeholder,
  isDisabled,
  onChange
}) => {
  return (
    <textarea
      rows={rows}
      cols={cols}
      className={`textarea ${className}`}
      placeholder={placeholder}
      defaultValue={defaultValue}
      disabled={isDisabled}
      onChange={event => onChange && onChange(event.target.value, event)}
    />
  );
};

export default Textarea;
