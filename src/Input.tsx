import React from "react";

import { InputProps, InputWithIconProps } from "../index";
import { Icon } from "./";

const InputComponent: React.SFC<InputProps> = ({
  className,
  defaultValue,
  placeholder,
  isDisabled,
  onChange
}) => (
  <input
    type="input"
    className={className}
    placeholder={placeholder}
    defaultValue={defaultValue}
    disabled={isDisabled}
    onChange={onChange}
  />
);

const Input: React.SFC<InputWithIconProps> = ({
  className,
  icon,
  iconColor = "black-3",
  defaultValue,
  placeholder,
  isDisabled,
  onChange
}) => {
  const inputClass = icon ? "input-icon__input" : "input";

  if (icon) {
    return (
      <div className="input-icon">
        <div className="input-icon__icon">
          <Icon name={icon} color={iconColor} />
        </div>
        <InputComponent
          className={`${inputClass} ${className}`}
          defaultValue={defaultValue}
          placeholder={placeholder}
          isDisabled={isDisabled}
          onChange={onChange}
        />
      </div>
    );
  } else {
    return (
      <InputComponent
        className={`${inputClass} ${className}`}
        defaultValue={defaultValue}
        placeholder={placeholder}
        isDisabled={isDisabled}
        onChange={onChange}
      />
    );
  }
};

export default Input;
