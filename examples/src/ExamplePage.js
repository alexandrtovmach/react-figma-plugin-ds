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
  Textarea
} from "../../dist";
import Layout from "./components/Layout";
import Component from "./components/Component";
import Select from "../../dist/Select";

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
            <Component
              onSelectComponent={console.log}
              name="Button"
              description="Description will be here, but not for now. I hope to complete all of that in a few weeks"
            >
              <Button>Primary</Button>
            </Component>
            <Component
              onSelectComponent={console.log}
              name="Button"
              description="Description will be here, but not for now. I hope to complete all of that in a few weeks"
            >
              <Button isDestructive>Destructive</Button>
            </Component>
            <Component
              onSelectComponent={console.log}
              name="Button"
              description="Description will be here, but not for now. I hope to complete all of that in a few weeks"
            >
              <Button isSecondary>Secondary</Button>
            </Component>
            <Component
              onSelectComponent={console.log}
              name="Button"
              description="Description will be here, but not for now. I hope to complete all of that in a few weeks"
            >
              <Button isSecondary isDestructive>
                Secondary destructive
              </Button>
            </Component>
            <Component
              onSelectComponent={console.log}
              name="Button"
              description="Description will be here, but not for now. I hope to complete all of that in a few weeks"
            >
              <Button isDisabled>Disabled</Button>
            </Component>
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
            <Disclosure label="Disclosure" isSection onExpand={console.log}>
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
            <Textarea
              rows={4}
              cols={3}
              defaultValue="Initial textarea value"
              onChange={console.log}
            />
            <Select
              placeholder="Select something"
              options={[
                { value: 1, label: "Item 1" },
                { divider: true },
                { value: 2, label: "Item 2" },
                { value: 3, label: "Item 3" },
                { divider: "Group" },
                { value: 4, label: "Item Group 1" },
                { value: 5, label: "Item Group 2" },
                { value: 6, label: "Item Group 3" },
                { divider: "Group B" },
                { value: 7, label: "Item GroupB 1" },
                { value: 8, label: "Item GroupB 2" },
                { value: 9, label: "Item GroupB 3" },
              ]}
            />
          </div>
        </section>

        <section id="text" className="viewport">
          <div className="frame">
            <Divider />
            <Title>Header 1</Title>
            <Title level="h2">Header 2</Title>
            <Title level="h2" size="xlarge">
              Header 2 (xlarge)
            </Title>
            <Title level="h2" size="xlarge" weight="bold">
              Header 2 (xlarge, bold)
            </Title>
            <Label>Label</Label>
            <Label size="xlarge">Label</Label>
            <Label size="xlarge" weight="bold">
              Label
            </Label>
            <Text size="medium" weight="bold">
              Bold
            </Text>
            <Text size="xlarge" weight="normal">
              Bold
            </Text>
            <Tip iconName="warning">Onboarding tip can look like this</Tip>
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
      </Layout>
    );
  }
}
