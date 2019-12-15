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
  Select
} from "../../dist";
import Layout from "./components/Layout";
import Playground from "./components/Playground";
import ExamplesBoard from "./components/ExamplesBoard";
import { api } from "./apiDocs";

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
            <ExamplesBoard>
              <Button>Button</Button>
              <Button isDestructive>Button</Button>
              <Button isSecondary>Button</Button>
              <Button isSecondary isDestructive>Button</Button>
              <Button isDisabled>Button</Button>
              <Button isSecondary isDisabled>Button</Button>
              <Button isSecondary isDestructive isDisabled>Button</Button>
            </ExamplesBoard>
            <Playground component={<Button />} options={api.button}/>
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
