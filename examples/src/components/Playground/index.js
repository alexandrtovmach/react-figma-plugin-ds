import React from "react";

import { Icon, Title, Select, Input, Label, Checkbox } from "../../../../dist";
import "./Playground.scss";

export default class Playground extends React.Component {
  constructor(props) {
    super(props);
    const { options = [] } = props;

    this.state = {
      ...options.reduce(
        (prev, el) => ({ ...prev, [el.name]: el.defaultValue }),
        {}
      )
    };

    this.handleChangePropValue = this.handleChangePropValue.bind(this);
    this.renderPropInput = this.renderPropInput.bind(this);
  }

  renderPropInput({ name, type, defaultValue }, i) {
    switch (type) {
      case "text":
        return (
          <Input
            key={`controller--${i}`}
            defaultValue={defaultValue}
            placeholder={name}
            onChange={value => this.handleChangePropValue(name, value)}
          />
        );
      case "switch":
        return (
          <Checkbox
            key={`controller--${i}`}
            defaultValue={defaultValue}
            label={name}
            onChange={value => this.handleChangePropValue(name, value)}
          />
        );
      case "function":
        return (
          <Title key={`controller--${i}`}>
            {name}: {defaultValue.toString()}
          </Title>
        );
      default:
        return (
          <Title key={`controller--${i}`}>
            {name}: {defaultValue}
          </Title>
        );
    }
  }

  handleChangePropValue(propName, value) {
    this.setState({
      [propName]: value
    });
  }

  render() {
    const { onSelectComponent, name, component, options } = this.props;
    const demoComponent =
      component && React.cloneElement(component, { ...this.state });
    return (
      <div className="playground">
        <header className="playground-header">
          <Title>Playground</Title>
          <Icon name="play" onClick={() => onSelectComponent(name)} />
        </header>
        <div className="playground-content">
          <section className="playground-controls">
            {options && options.map(this.renderPropInput)}
          </section>
          <section className="playground-result">{demoComponent}</section>
        </div>
      </div>
    );
  }
}
