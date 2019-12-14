import React from "react";

import { SelectProps } from "../index";

interface SelectState {
  isExpanded: boolean;
}

class Select extends React.Component<SelectProps, SelectState> {
  state = {
    isExpanded: false,
    selectedOption:
      this.props.options.find(
        ({ value }) => this.props.defaultValue === value
      ) || this.props.options[0]
  };

  componentDidUpdate(prevProps: SelectProps, prevState: SelectState) {
    if (prevState.isExpanded !== this.state.isExpanded) {
      const { onExpand } = this.props;
      onExpand && onExpand(this.state.isExpanded);
    }
  }

  handleExpandClick = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  };

  handleSelectClick = value => {
    console.log(value);
    // this.setState({
    //   isExpanded: !this.state.isExpanded
    // });
  };

  render() {
    const { className = "", options, children, defaultValue } = this.props;
    const { isExpanded, selectedOption } = this.state;
    const expandButtonClass = isExpanded ? "select-menu__button--active" : "";

    return (
      <div className="select-menu">
        <button
          className={`select-menu__button ${expandButtonClass}`}
          onClick={this.handleExpandClick}
        >
          <span className="select-menu__button-label">
            {selectedOption.value}
          </span>
          <span className="select-menu__icon"></span>
        </button>
        <ul
          className="select-menu__list select-menu__list--active"
          style={{ top: "-24px" }}
        >
          {options &&
            options.map(({ value, label }) => (
              <li
                className="select-menu__list-item"
                onClick={() => this.handleSelectClick(value)}
              >
                <span className="select-menu__list-item-icon"></span>
                <span className="select-menu__list-item-text">{label}</span>
              </li>
            ))}
          {/* <li className="select-menu__list-item select-menu__list-item--active">
            <span className="select-menu__list-item-icon"></span>
            <span className="select-menu__list-item-text">Item 2</span>
          </li> */}
        </ul>
      </div>
    );
  }
}

export default Select;
