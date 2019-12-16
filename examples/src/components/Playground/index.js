import React from "react";

import { Title, Select, Input, Checkbox, Text } from "../../../../dist";
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

  renderPropInput({ name, type, defaultValue, options, isDisabled }) {
    switch (type) {
      case "string":
        return (
          <Input
            defaultValue={defaultValue}
            placeholder={"Enter string..."}
            isDisabled={isDisabled}
            onChange={value => this.handleChangePropValue(name, value)}
          />
        );
      case "number":
        return (
          <Input
            type="number"
            defaultValue={defaultValue}
            placeholder={"Enter number..."}
            isDisabled={isDisabled}
            onChange={value => this.handleChangePropValue(name, Number(value))}
          />
        );
      case "boolean":
        return (
          <Checkbox
            defaultValue={defaultValue}
            label={"false/true"}
            isDisabled={isDisabled}
            onChange={value => this.handleChangePropValue(name, value)}
          />
        );
      case "enum":
        return (
          <Select
            defaultValue={defaultValue}
            placeholder={`Select ${name}`}
            options={options.map(opt => ({
              value: opt.value === undefined ? opt : opt.value,
              label: opt.label === undefined ? opt : opt.label
            }))}
            isDisabled={isDisabled}
            onChange={({ value }) => this.handleChangePropValue(name, value)}
          />
        );
      case "function":
        return (
          <Title level="h3">
            {name}: {defaultValue.toString()}
          </Title>
        );
      default:
        return (
          <Title level="h3">
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
        <div className="playground-content">
          <section className="playground-controls">
            {options &&
              options.map((opt, i) => (
                <div key={`controller--${i}`} className="control-property">
                  <header className="control-header">
                    <Text weight="bold" size="large">
                      {opt.name}
                      {opt.isRequired && "*"}
                    </Text>
                    &nbsp;
                    <Text>[{opt.type}]</Text>
                  </header>
                  {this.renderPropInput(opt)}
                </div>
              ))}
          </section>
          <section className="playground-result">{demoComponent}</section>
        </div>
      </div>
    );
  }
}
