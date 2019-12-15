import React from "react";

import { Icon, Title, Select } from "../../../../dist";
import "./Playground.scss";

export default class Playground extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { onSelectComponent, name, component, options } = this.props;
    return (
      <div className="playground">
        <header className="playground-header">
          <Title>Playground</Title>
          <Icon name="play" onClick={() => onSelectComponent(name)} />
        </header>
        <div className="playground-content">
          <section className="playground-controls">
            
          </section>
          <section className="playground-result">
            {component && React.cloneElement(component, {
              isSecondary: true,
              children: "Button"
            })}
          </section>
        </div>
      </div>
    );
  }
}
