import React from "react";

import { DisclosureProps } from "../index";

interface DisclosureState {
  isExpanded: boolean;
}

class Disclosure extends React.Component<DisclosureProps, DisclosureState> {
  state = {
    isExpanded: Boolean(this.props.isDefaultExpanded)
  };

  componentDidUpdate(prevProps: DisclosureProps, prevState: DisclosureState) {
    if (prevState.isExpanded !== this.state.isExpanded) {
      const { onExpandChange } = this.props;
      onExpandChange && onExpandChange(this.state.isExpanded);
    }
  }

  handleDisclosureClick = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  };

  render() {
    const { label, children, isSection } = this.props;
    const { isExpanded } = this.state;
    const labelClass = isSection ? "disclosure--section" : "";
    const expandClass = isExpanded ? "disclosure--expanded" : "";

    return (
      <div className="disclosure">
        <div className={`disclosure__item ${expandClass} ${labelClass}`}>
          <div
            className="disclosure__label"
            onClick={this.handleDisclosureClick}
          >
            {label}
          </div>
          <div className="disclosure__content">{children}</div>
        </div>
      </div>
    );
  }
}

export default Disclosure;
