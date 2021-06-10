import React, { forwardRef } from "react";

import { InputProps, InputWithIconProps } from "../index";
import { Icon } from "./";

const InputComponent = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      className = "",
      type,
      defaultValue,
      placeholder,
      isDisabled,
      onChange,
    },
    ref
  ) => (
    <input
      name={name}
      type={type}
      className={className}
      placeholder={placeholder}
      defaultValue={defaultValue}
      disabled={isDisabled}
      onChange={(event) => onChange && onChange(event.target.value, event)}
      ref={ref}
    />
  )
);

const Input = forwardRef<HTMLInputElement, InputWithIconProps>(
  (
    {
      name,
      className,
      type,
      icon,
      iconColor = "black3",
      defaultValue,
      placeholder,
      isDisabled,
      onChange,
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
            name={name}
            className={`${inputClass} ${className}`}
            type={type}
            defaultValue={defaultValue}
            placeholder={placeholder}
            isDisabled={isDisabled}
            onChange={onChange}
            ref={ref}
          />
        </div>
      );
    } else {
      return (
        <div className="input">
          <InputComponent
            name={name}
            className={`${inputClass} ${className}`}
            type={type}
            defaultValue={defaultValue}
            placeholder={placeholder}
            isDisabled={isDisabled}
            onChange={onChange}
            ref={ref}
          />
        </div>
      );
    }
  }
);

export default Input;
