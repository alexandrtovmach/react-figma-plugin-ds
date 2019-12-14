import React from "react";

import { Icon, Title, Label } from "../../../../dist";
import "./Component.scss";

export default class Component extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { onSelectComponent, name, description, children } = this.props;
    return (
      <div className="card">
        <header className="card-header">
          <Title>{name}</Title>
          <Icon name="styles" onClick={() => onSelectComponent(name)} />
        </header>
        <section className="card-content">
          {children}
        </section>
        <footer className="card-footer">
          <Label>
            {description}
          </Label>
        </footer>
      </div>
    );
  }
}
