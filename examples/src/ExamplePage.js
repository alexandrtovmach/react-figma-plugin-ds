import React from "react";

import {
  Button,
  Checkbox,
  Disclosure,
  Input,
  Icon,
  Divider,
  Title,
  Label,
  Text,
  Tip,
  Textarea,
} from "../../dist";
import Layout from "./components/Layout";

export default class ExaplePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    const {} = this.state;
    return (
      <Layout>
        <section id="buttons" className="viewport">
          <div className="frame">
            <Button>Start</Button>
            <Button isDestructive>Start</Button>
            <Button isSecondary isDestructive onClick={console.log}>
              Start
            </Button>
          </div>
        </section>

        <section id="checkbox" className="viewport">
          <div className="frame">
            <Checkbox defaultValue={true} isCheckbox label="Checkbox" />
            <Checkbox label="Switch" />
            <Checkbox onChange={console.log} label="with handler" />
          </div>
        </section>

        <section id="disclosure" className="viewport">
          <div className="frame">
            <Disclosure label="Disclosure">Panel content here</Disclosure>
            <Disclosure label="Disclosure" isSection isDefaultExpanded>
              Panel content here
            </Disclosure>
            <Disclosure
              label="Disclosure"
              isSection
              onExpandChange={console.log}
            >
              Panel content here
            </Disclosure>
          </div>
        </section>

        <section id="input" className="viewport">
          <div className="frame">
            <Input placeholder="Email" />
            <Input placeholder="Placeholder" defaultValue="value" />
            <Input
              placeholder="Placeholder"
              defaultValue="value"
              icon="alert"
            />
            <Input
              placeholder="Placeholder"
              defaultValue="value"
              icon="alert"
              iconColor="blue"
            />
            <Input
              placeholder="Placeholder"
              defaultValue="value"
              icon="alert"
              onChange={console.log}
            />
            <Textarea rows={4} cols={3} defaultValue="Initial textarea value" onChange={console.log}/>
          </div>
        </section>

        <section id="icon" className="viewport">
          <div className="frame">
            <Icon name="alert" />
            <Icon name="alert" color="blue" />
            <Icon text="K" />
            <Icon text="K" color="blue" onClick={console.log} />
            <Icon text="K" color="blue" onClick={console.log} isDisabled />
            <Icon text="K" color="blue" onClick={console.log} isSelected />
          </div>
        </section>

        <section id="text" className="viewport">
          <div className="frame">
            <Divider />
            <Title>Header 1</Title>
            <Title level="h2">Header 2</Title>
            <Title level="h2" size="xlarge">Header 2 (xlarge)</Title>
            <Title level="h2" size="xlarge" weight="bold">Header 2 (xlarge, bold)</Title>
            <Label>Label</Label>
            <Label size="xlarge">Label</Label>
            <Label size="xlarge" weight="bold">Label</Label>
            <Text size="medium" weight="bold">
              Bold
            </Text>
            <Text size="xlarge" weight="normal">
              Bold
            </Text>
            <Tip iconName="warning">Onboarding tip can look like this</Tip>
          </div>
        </section>
      </Layout>
    );
  }
}
