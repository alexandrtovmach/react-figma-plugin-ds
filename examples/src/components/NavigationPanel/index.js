import React from "react";

import { Tip } from "../../../../dist";
import "./NavigationPanel.scss";

export default class NavigationPanel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <aside className="navigation-panel">
        <a href="#buttons">
          <Tip iconName="frame">Button</Tip>
        </a>
        <a href="#checkbox">
          <Tip iconName="frame">Checkbox</Tip>
        </a>
        <a href="#disclosure">
          <Tip iconName="frame">Disclosure</Tip>
        </a>
        <a href="#input">
          <Tip iconName="frame">Input</Tip>
        </a>
        <a href="#textarea">
          <Tip iconName="frame">Textarea</Tip>
        </a>
        <a href="#text">
          <Tip iconName="frame">Text</Tip>
        </a>
        <a href="#icon">
          <Tip iconName="frame">Icon</Tip>
        </a>
      </aside>
    );
  }
}
