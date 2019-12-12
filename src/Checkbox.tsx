import React from "react";

import { CheckboxProps } from "../index";

const Button: React.SFC<CheckboxProps> = ({
  checkbox,
  disabled,
  label,
  defaultValue,
  onChange
}) => {
  const type = checkbox ? "checkbox" : "switch";
  const inputClass = checkbox ? "checkbox__box" : "switch__toggle";
  const labelClass = checkbox ? "checkbox__label" : "switch__label";
  const uniqueId = `${type}--${(Math.random() * 100000000).toFixed(0)}`;

  return (
    <div className={type}>
      <input
        defaultChecked={defaultValue}
        onChange={onChange}
        className={inputClass}
        type="checkbox"
        id={uniqueId}
        disabled={disabled}
      />
      <label className={labelClass} htmlFor={uniqueId}>
        {label}
      </label>
    </div>
  );
};

export default Button;
