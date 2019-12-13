import React from "react";

import { InputProps } from "../index";

const Input: React.SFC<InputProps> = ({
  icon,
  iconColor = "black-3",
  defaultValue,
  placeholder,
  isDisabled,
  onChange
}) => {
  const inputClass = icon ? "input-icon__input" : "input";
  const inputEl = (
    <input
      type="input"
      className={inputClass}
      placeholder={placeholder}
      defaultValue={defaultValue}
      disabled={isDisabled}
      onChange={onChange}
    />
  );

  return icon ? (
    <div className="input-icon">
      <div className="input-icon__icon">
        <div className={`icon icon--${icon} icon--${iconColor}`}></div>
      </div>
      {inputEl}
    </div>
  ) : (
    inputEl
  );
};

export default Input;
