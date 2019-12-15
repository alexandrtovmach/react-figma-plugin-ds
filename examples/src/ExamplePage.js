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
            <Playground component={<Button />} options={api.button} />
          </div>
        </section>

        <section id="checkbox" className="viewport">
          <div className="frame">
            <ExamplesBoard>
              <Checkbox label="Toggle me" />
              <Checkbox label="Toggle me" isCheckbox />
              <Checkbox label="Toggle me" defaultValue={true} />
              <Checkbox label="Toggle me" isCheckbox defaultValue={true} />
              <Checkbox label="Toggle me" isDisabled />
              <Checkbox label="Toggle me" isCheckbox isDisabled />
            </ExamplesBoard>
            <Playground component={<Checkbox />} options={api.checkbox} />
          </div>
        </section>

        <section id="disclosure" className="viewport">
          <div className="frame">
            <ExamplesBoard>
              <Disclosure label="Expand me">Disclosure content</Disclosure>
              <Disclosure label="Expand me" isSection>Disclosure content</Disclosure>
              <Disclosure label="Expand me" isDefaultExpanded>Disclosure content</Disclosure>
              <Disclosure label="Expand me" isSection isDefaultExpanded>Disclosure content</Disclosure>
            </ExamplesBoard>
            <Playground component={<Disclosure />} options={api.disclosure} />
          </div>
        </section>

        <section id="input" className="viewport">
          <div className="frame">
            <ExamplesBoard>
              <Input placeholder="Placeholder" />
              <Input placeholder="Disabled" isDisabled />
              <Input placeholder="Placeholder" icon="alert" iconColor="blue" />
              <Input placeholder="Disabled" icon="alert" iconColor="blue" isDisabled />
            </ExamplesBoard>
            <Playground component={<Input />} options={api.input} />
          </div>
        </section>

        <section id="textarea" className="viewport">
          <div className="frame">
            <ExamplesBoard>
              <Textarea placeholder="Here you can enter text..." rows={2} cols={3} />
              <Textarea placeholder="Here you can't enter text..." rows={2} cols={3} isDisabled />
              <Textarea placeholder="Here you can enter text..." rows={2} cols={3} defaultValue="Default text" />
              <Textarea placeholder="Here you can enter text..." rows={2} cols={3} defaultValue="Default disabled text" isDisabled />
            </ExamplesBoard>
            <Playground component={<Textarea />} options={api.textarea} />
          </div>
        </section>
        {/* 
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
            /> */}

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
