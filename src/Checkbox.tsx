import React, { forwardRef } from "react";

import { CheckboxProps } from "../index";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { id, className, type, isDisabled, label, name, defaultValue, onChange },
    ref
  ) => {
    className = className || "";
    type = type || "checkbox";
    let inputConfig: any = {
      name,
      id: id || `${type}--${(Math.random() * 100000000).toFixed(0)}`,
      ref,
    };
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
          onChange={(event) =>
            onChange && onChange(event.target.checked, event)
          }
          disabled={isDisabled}
        />
        <label className={labelClass} htmlFor={inputConfig.id}>
          {label}
        </label>
      </div>
    );
  }
);

export default Checkbox;
