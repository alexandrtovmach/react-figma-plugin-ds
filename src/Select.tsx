import React, { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

import { SelectProps } from "../index";

const Select: React.FunctionComponent<SelectProps> = ({
  className = "",
  options,
  placeholder,
  isDisabled,
  defaultValue,
  onExpand,
  onChange,
  unExpandedButtonProps
}) => {
  const [isExpanded, onExpandedStateChange] = useState(false);
  const [selectedOption, onSelectOption] = useState(
    options.find(({ value }) => defaultValue === value)
  );
  useEffect(() => {
    onExpand && onExpand(isExpanded);
  }, [isExpanded]);
  useEffect(() => {
    onChange && selectedOption && onChange(selectedOption);
  }, [selectedOption]);
  useEffect(() => {
    const newSelectedOption = options.find(
      ({ value }) => defaultValue === value
    );
    onSelectOption(newSelectedOption);
  }, [defaultValue]);

  const handleExpandClick = () => onExpandedStateChange(!isExpanded);

  const handleOutsideClick = () => onExpandedStateChange(false);

  const handleSelectClick = (value: any) => {
    const newOption = options.find(({ value: v }) => v === value);
    onExpandedStateChange(false);
    onSelectOption(newOption);
  };

  const expandButtonClass = isExpanded ? "select-menu__button--active" : "";
  const expanListClass = isExpanded ? "select-menu__menu--active" : "";
  const disabledColorClass = isDisabled ? "icon--black-3" : "";

  return (
    <OutsideClickHandler
      onOutsideClick={handleOutsideClick}
      disabled={!isExpanded}
    >
      <div className={`select-menu ${className}`}>
        <button
          {...unExpandedButtonProps}
          className={`select-menu__button ${expandButtonClass} ${disabledColorClass}`}
          onClick={handleExpandClick}
          disabled={isDisabled}
          title={selectedOption?.title}
          type="button"
        >
          <span className="select-menu__label">
            {(selectedOption && selectedOption.label) || placeholder}
          </span>
          <span className="select-menu__caret" />
        </button>
        <ul
          className={`select-menu__menu ${expanListClass} ${disabledColorClass}`}
          style={{ top: "-24px" }}
        >
          {options &&
            options.map(({ value, label, divider, title }, i) =>
              divider ? (
                <React.Fragment key={`select-option-divider--${i}`}>
                  {divider !== true && (
                    <span className="select-menu__divider-label">
                      {divider}
                    </span>
                  )}
                  <div
                    className="select-menu__divider"
                    key={`select-option--${i}`}
                  />
                </React.Fragment>
              ) : (
                <li
                  className={`select-menu__item ${
                    selectedOption && selectedOption.value === value
                      ? "select-menu__item--selected"
                      : ""
                  }`}
                  onClick={() => handleSelectClick(value)}
                  key={`select-option--${i}`}
                  title={title}
                >
                  <span className="select-menu__item-icon"></span>
                  <span className="select-menu__item-label">{label}</span>
                </li>
              )
            )}
        </ul>
      </div>
    </OutsideClickHandler>
  );
};

export default Select;
