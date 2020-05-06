import React from "react";
import OutsideClickHandler from "react-outside-click-handler";

import { SelectProps, SelectState } from "../index";

class Select extends React.Component<SelectProps, SelectState> {
  constructor(props: SelectProps) {
    super(props);
    const { options, defaultValue } = props;
    this.state = {
      isExpanded: false,
      selectedOption: options.find(({ value }) => defaultValue === value)
    };
  }

  componentDidUpdate(prevProps: SelectProps, prevState: SelectState) {
    if (prevState.isExpanded !== this.state.isExpanded) {
      const { onExpand } = this.props;
      onExpand && onExpand(this.state.isExpanded);
    }

    if (prevProps.defaultValue !== this.props.defaultValue) {
      const newSelectedOption = this.props.options.find(
        ({ value }) => this.props.defaultValue === value
      );
      this.setState({ selectedOption: newSelectedOption });
    }

    if (
      this.state.selectedOption &&
      (prevState.selectedOption && prevState.selectedOption.value) !==
        this.state.selectedOption.value
    ) {
      const { onChange } = this.props;
      onChange && onChange(this.state.selectedOption);
    }
  }

  handleExpandClick = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  };

  handleOutsideClick = () => {
    this.setState({
      isExpanded: false
    });
  };

  handleSelectClick = (value: any) => {
    const { options } = this.props;
    const newOption = options.find(({ value: v }) => v === value);
    this.setState({
      isExpanded: false,
      selectedOption: newOption
    });
  };

  render() {
    const { className = "", options, placeholder, isDisabled } = this.props;
    const { isExpanded, selectedOption } = this.state;
    const expandButtonClass = isExpanded ? "select-menu__button--active" : "";
    const expanListClass = isExpanded ? "select-menu__list--active" : "";
    const disabledColorClass = isDisabled ? "icon--black-3" : "";

    return (
      <div className={`select-menu ${className}`}>
        <OutsideClickHandler
          onOutsideClick={this.handleOutsideClick}
          disabled={!isExpanded}
        >
          <button
            className={`select-menu__button ${expandButtonClass} ${disabledColorClass}`}
            onClick={this.handleExpandClick}
            disabled={isDisabled}
          >
            <span className="select-menu__button-label">
              {(selectedOption && selectedOption.label) || placeholder}
            </span>
            <span className={`select-menu__icon ${disabledColorClass}`} />
          </button>
          <ul
            className={`select-menu__list ${expanListClass} ${disabledColorClass}`}
            style={{ top: "-24px" }}
          >
            {options &&
              options.map(({ value, label, divider }, i) =>
                divider ? (
                  <div
                    className="select-menu__divider"
                    key={`select-option--${i}`}
                  >
                    {divider === true ? (
                      <span className="select-menu__divider-line" />
                    ) : (
                      <span className="select-menu__divider-label">
                        {divider}
                      </span>
                    )}
                  </div>
                ) : (
                  <li
                    className={`select-menu__list-item ${
                      selectedOption && selectedOption.value === value
                        ? "select-menu__list-item--active"
                        : ""
                    }`}
                    onClick={() => this.handleSelectClick(value)}
                    key={`select-option--${i}`}
                  >
                    <span className="select-menu__list-item-icon"></span>
                    <span className="select-menu__list-item-text">{label}</span>
                  </li>
                )
              )}
          </ul>
        </OutsideClickHandler>
      </div>
    );
  }
}

export default Select;
