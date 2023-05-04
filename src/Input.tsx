import React, { forwardRef } from "react";

import { InputProps, InputWithIconProps } from "../index";
import { Icon } from "./";

const InputComponent = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      type,
      defaultValue,
      placeholder,
      isDisabled,
      onChange,
      ...htmlInputProps
    },
    ref
  ) => (
    <input
      {...htmlInputProps}
      ref={ref}
      type={type}
      className={className}
      placeholder={placeholder}
      defaultValue={defaultValue}
      disabled={isDisabled}
      onChange={(event) => onChange && onChange(event.target.value, event)}
    />
  )
);

const Input = forwardRef<HTMLInputElement, InputWithIconProps>(
  (
    {
      className,
      type,
      icon,
      iconColor = "black3",
      defaultValue,
      placeholder,
      isDisabled,
      onChange,
      children,
      ...htmlInputProps
    },
    ref
  ) => {
    className = className || "";
    type = type || "text";
    const inputClass = "input__field";

    if (icon) {
      return (
        <div className="input input--with-icon">
          <Icon name={icon} color={iconColor} isDisabled={isDisabled} />
          <InputComponent
            {...htmlInputProps}
            ref={ref}
            className={`${inputClass} ${className}`}
            type={type}
            defaultValue={defaultValue}
            placeholder={placeholder}
            isDisabled={isDisabled}
            onChange={onChange}
          />
          {children}
        </div>
      );
    } else {
      return (
        <div className="input">
          <InputComponent
            {...htmlInputProps}
            ref={ref}
            className={`${inputClass} ${className}`}
            type={type}
            defaultValue={defaultValue}
            placeholder={placeholder}
            isDisabled={isDisabled}
            onChange={onChange}
          />
          {children}
        </div>
      );
    }
  }
);

export default Input;
