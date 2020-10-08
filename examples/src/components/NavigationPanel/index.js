import React from "react";

import { Tip } from "../../../../dist";
import "./NavigationPanel.scss";

const ROUTES = [
  "Button",
  "Checkbox",
  "Disclosure",
  "Input",
  "Textarea",
  "Select",
  "Title",
  "Label",
  "Text",
  "Tip",
  "Icon"
];
export default class NavigationPanel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      activeLink: ""
    };

    this.setActiveLink = this.setActiveLink.bind(this);
  }

  componentDidMount() {
    window.addEventListener("hashchange", this.setActiveLink, false);
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.doSomething, false);
  }

  setActiveLink() {
    this.setState({
      activeLink: window.location.hash
    })
  }

  render() {
    const { activeLink } = this.state;
    return (
      <aside className="navigation-panel">
        {ROUTES.map((route, i) => {
          const path = `#${route.toLowerCase()}`
          return <a key={`nav-link--${i}`} href={path} className={activeLink === path ? "active-link" : ""}>
            <Tip iconName="frame">{route}</Tip>
          </a>
        })}
      </aside>
    );
  }
}
