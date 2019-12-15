import React from "react";

import { Label } from "../../../../dist";
import "./ExamplesBoard.scss";

export default class Component extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { children } = this.props;
    return <div className="examples-board">{children}</div>;
  }
}
