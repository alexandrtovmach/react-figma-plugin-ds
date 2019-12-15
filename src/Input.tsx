import React from "react";

import { InputProps, InputWithIconProps } from "../index";
import { Icon } from "./";

const InputComponent: React.SFC<InputProps> = ({
  className = "",
  type = "text",
  defaultValue,
  placeholder,
  isDisabled,
  onChange
}) => (
  <input
    type={type}
    className={className}
    placeholder={placeholder}
    defaultValue={defaultValue}
    disabled={isDisabled}
    onChange={event => onChange && onChange(event.target.value, event)}
  />
);

const Input: React.SFC<InputWithIconProps> = ({
  className = "",
  type,
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
          <Icon name={icon} color={iconColor} isDisabled={isDisabled} />
        </div>
        <InputComponent
          className={`${inputClass} ${className}`}
          type={type}
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
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        isDisabled={isDisabled}
        onChange={onChange}
      />
    );
  }
};

export default Input;
