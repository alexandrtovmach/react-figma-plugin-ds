import React, { forwardRef } from "react";

import { TextareaProps } from "../index";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      name,
      className,
      rows = 2,
      defaultValue,
      placeholder,
      isDisabled,
      onChange,
    },
    ref
  ) => {
    className = className || "";
    return (
      <textarea
        name={name}
        rows={rows}
        className={`textarea ${className}`}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={isDisabled}
        onChange={(event) => onChange && onChange(event.target.value, event)}
        ref={ref}
      />
    );
  }
);

export default Textarea;
