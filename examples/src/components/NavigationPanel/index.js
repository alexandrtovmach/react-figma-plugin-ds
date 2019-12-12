import React from "react";

import "./NavigationPanel.scss";

export default class NavigationPanel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return <aside className="navigation-panel"></aside>;
  }
}
