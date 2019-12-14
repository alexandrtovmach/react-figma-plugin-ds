import React from "react";

import "./NavigationPanel.scss";

export default class NavigationPanel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <aside className="navigation-panel">
        <a href="#buttons">Button</a>
        <a href="#checkbox">Checkbox</a>
        <a href="#disclosure">Disclosure</a>
        <a href="#input">Input</a>
        <a href="#textarea">Textarea</a>
        <a href="#text">Text</a>
        <a href="#icon">Icon</a>
      </aside>
    );
  }
}
