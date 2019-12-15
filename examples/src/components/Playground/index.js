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

  renderPropInput({ name, type, defaultValue, options }, i) {
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
      case "number":
        return (
          <Input
            key={`controller--${i}`}
            type="number"
            defaultValue={defaultValue}
            placeholder={name}
            onChange={value => this.handleChangePropValue(name, Number(value))}
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
      case "select":
        return (
          <Select
            key={`controller--${i}`}
            defaultValue={defaultValue}
            placeholder={`Select ${name}`}
            options={options.map(opt => ({
              value: opt.value === undefined ? opt : opt.value,
              label: opt.label === undefined ? opt : opt.label
            }))}
            onChange={({ value }) => this.handleChangePropValue(name, value)}
          />
        );
      case "function":
        return (
          <Title level="h3" key={`controller--${i}`}>
            {name}: {defaultValue.toString()}
          </Title>
        );
      default:
        return (
          <Title level="h3" key={`controller--${i}`}>
            {name}: {JSON.stringify(defaultValue)}
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
          <Title level="h2" weight="bold" size="xlarge">
            {name} Playground
          </Title>
          {/* <Icon name="play" onClick={() => onSelectComponent(name)} /> */}
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
