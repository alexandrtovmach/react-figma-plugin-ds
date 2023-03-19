import React from "react";

import { IconExtended, InputProps, InputWithIconProps } from "../index";
import { Icon } from "./";


const InputComponent: React.FunctionComponent<InputProps> = ({
  className = "",
  type,
  defaultValue,
  placeholder,
  isDisabled,
  onChange,
  ...htmlInputProps
}) => (
  <input
    {...htmlInputProps}
    type={type}
    className={className}
    placeholder={placeholder}
    defaultValue={defaultValue}
    disabled={isDisabled}
    onChange={(event) => onChange && onChange(event.target.value, event)}
  />
);

const Input: React.FunctionComponent<InputWithIconProps & IconExtended> = ({
  className,
  type,
  icon,
  iconColor = "black3",
  defaultValue,
  placeholder,
  isDisabled,
  onChange,
  children,
  iconComponent,
  ...htmlInputProps
}) => {
  className = className || "";
  type = type || "text";
  const inputClass = "input__field";

  if (icon) {
    return (
      <div className="input input--with-icon">
        <Icon name={icon} color={iconColor} isDisabled={isDisabled} iconComponent={iconComponent} />
        <InputComponent
          {...htmlInputProps}
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
};

export default Input;
