import React from "react";

import { CheckboxProps } from "../index";

const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  id,
  className,
  type,
  isDisabled,
  label,
  name,
  defaultValue,
  checked,
  onChange,
}) => {
  className = className || "";
  type = type || "checkbox";
  let inputConfig: any = {
    id: id || `${type}--${(Math.random() * 100000000).toFixed(0)}`,
  };
  if (defaultValue && checked) {
    console.warn(
      `Use either "defaultValue" to create an uncontrolled component or "checked" to create a controlled component`
    );
  }
  switch (type) {
    case "switch":
      inputConfig = {
        ...inputConfig,
        className: "switch__toggle",
        type: "checkbox",
      };
      break;
    case "radio":
      inputConfig = {
        ...inputConfig,
        className: "radio__button",
        type: "radio",
        name,
      };
      break;
    default:
      inputConfig = {
        ...inputConfig,
        className: "checkbox__box",
        type: "checkbox",
      };
      break;
  }
  const labelClass = `${type}__label`;

  return (
    <div className={`${type} ${className}`}>
      <input
        {...inputConfig}
        defaultChecked={defaultValue}
        checked={checked}
        onChange={(event) => onChange && onChange(event.target.checked, event)}
        disabled={isDisabled}
      />
      <label className={labelClass} htmlFor={inputConfig.id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
