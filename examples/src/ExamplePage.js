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
  Select,
} from "../..";
import Layout from "./components/Layout";
import Playground from "./components/Playground";
import ExamplesBoard from "./components/ExamplesBoard";
import { api } from "./api";

import "figma-plugin-ds/dist/figma-plugin-ds.css";

export default class ExaplePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedComponentCode: "",
    };

    this.handleSelectComponent = this.handleSelectComponent.bind(this);
  }

  handleSelectComponent(componentCode) {
    this.setState({
      selectedComponentCode: componentCode,
    });
  }

  render() {
    const { selectedComponentCode } = this.state;
    return (
      <Layout componentCode={selectedComponentCode}>
        <section id="button" className="viewport">
          <div className="frame">
            <ExamplesBoard>
              <Button>Primary</Button>
              <Button isSecondary>Secondary</Button>
              <Button isTertiary>Tertiary</Button>
              <Button isDestructive>Destructive</Button>
              <Button isDisabled>Disabled</Button>
            </ExamplesBoard>
            <Playground
              name="Button"
              component={<Button />}
              onSelectComponent={this.handleSelectComponent}
              options={api.button}
            />
          </div>
        </section>

        <section id="checkbox" className="viewport">
          <div className="frame">
            <ExamplesBoard>
              <Checkbox label="Switch" />
              <Checkbox label="Checkbox" isCheckbox />
              <Checkbox label="Disabled" isDisabled />
            </ExamplesBoard>
            <Playground
              name="Checkbox"
              component={<Checkbox />}
              onSelectComponent={this.handleSelectComponent}
              options={api.checkbox}
            />
          </div>
        </section>

        <section id="disclosure" className="viewport">
          <div className="frame">
            <ExamplesBoard>
              <Disclosure label="Disclosure">Disclosure content</Disclosure>
              <Disclosure label="Section Disclosure" isSection>
                Section Disclosure content
              </Disclosure>
            </ExamplesBoard>
            <Playground
              name="Disclosure"
              component={<Disclosure />}
              onSelectComponent={this.handleSelectComponent}
              options={api.disclosure}
            />
          </div>
        </section>

        <section id="input" className="viewport">
          <div className="frame">
            <ExamplesBoard>
              <Input placeholder="Enter text..." />
              <Input placeholder="Disabled" isDisabled />
              <Input placeholder="With icon" icon="alert" iconColor="blue" />
            </ExamplesBoard>
            <Playground
              name="Input"
              component={<Input />}
              onSelectComponent={this.handleSelectComponent}
              options={api.input}
            />
          </div>
        </section>

        <section id="textarea" className="viewport">
          <div className="frame">
            <ExamplesBoard>
              <Textarea
                placeholder="Here you can enter text..."
                rows={2}
                defaultValue="Lorem ipsum dolor"
              />
              <Textarea
                placeholder="Here you can't enter text..."
                rows={2}
                defaultValue="Disabled textarea"
                isDisabled
              />
            </ExamplesBoard>
            <Playground
              name="Textarea"
              component={<Textarea />}
              onSelectComponent={this.handleSelectComponent}
              options={api.textarea}
            />
          </div>
        </section>

        <section id="select" className="viewport">
          <div className="frame">
            <ExamplesBoard>
              <Select
                placeholder="Select item"
                onSelectComponent={this.handleSelectComponent}
                options={[
                  { value: 1, label: "Item 1" },
                  { value: 2, label: "Item 2" },
                  { value: 3, label: "Item 3" },
                ]}
              />
              <Select
                placeholder="Select item with groups"
                onSelectComponent={this.handleSelectComponent}
                options={[
                  { value: 1, label: "Item 1" },
                  { value: 2, label: "Item 2" },
                  { value: 3, label: "Item 3" },
                  { divider: true },
                  { value: 4, label: "Item 4" },
                  { value: 5, label: "Item 5" },
                  { value: 6, label: "Item 6" },
                  { divider: "Group A" },
                  { value: 7, label: "Item GroupA 1" },
                  { value: 8, label: "Item GroupA 2" },
                  { value: 9, label: "Item GroupA 3" },
                  { divider: "Group B" },
                  { value: 10, label: "Item GroupB 1" },
                  { value: 11, label: "Item GroupB 2" },
                  { value: 12, label: "Item GroupB 3" },
                ]}
              />
            </ExamplesBoard>
            <Playground
              name="Select"
              component={<Select />}
              onSelectComponent={this.handleSelectComponent}
              options={api.select}
            />
          </div>
        </section>

        <section id="divider" className="viewport">
          <div className="frame">
            <ExamplesBoard>
              <div>
                <Text>
                  Something interesting and important can be written here, and
                  then to accent user attention on something we can divide text
                  with Divider.
                </Text>
                <Divider />
                <Text>Just take a look how it's beautiful.</Text>
              </div>
            </ExamplesBoard>
            <Playground
              name="Divider"
              component={<Divider />}
              onSelectComponent={this.handleSelectComponent}
              options={api.divider}
            />
          </div>
        </section>

        <section id="title" className="viewport">
          <div className="frame">
            <ExamplesBoard>
              <Title>Title</Title>
              <Title weight="medium">Title</Title>
              <Title weight="bold">Title</Title>
              <Title size="medium">Title</Title>
              <Title size="medium" weight="medium">
                Title
              </Title>
              <Title size="medium" weight="bold">
                Title
              </Title>
              <Title size="large">Title</Title>
              <Title size="large" weight="medium">
                Title
              </Title>
              <Title size="large" weight="bold">
                Title
              </Title>
              <Title size="xlarge">Title</Title>
              <Title size="xlarge" weight="medium">
                Title
              </Title>
              <Title size="xlarge" weight="bold">
                Title
              </Title>
            </ExamplesBoard>
            <Playground
              name="Title"
              component={<Title />}
              onSelectComponent={this.handleSelectComponent}
              options={api.title}
            />
          </div>
        </section>

        <section id="label" className="viewport">
          <div className="frame">
            <ExamplesBoard>
              <Label>Label</Label>
              <Label weight="medium">Label</Label>
              <Label weight="bold">Label</Label>
              <Label size="medium">Label</Label>
              <Label size="medium" weight="medium">
                Label
              </Label>
              <Label size="medium" weight="bold">
                Label
              </Label>
              <Label size="large">Label</Label>
              <Label size="large" weight="medium">
                Label
              </Label>
              <Label size="large" weight="bold">
                Label
              </Label>
              <Label size="xlarge">Label</Label>
              <Label size="xlarge" weight="medium">
                Label
              </Label>
              <Label size="xlarge" weight="bold">
                Label
              </Label>
            </ExamplesBoard>
            <Playground
              name="Label"
              component={<Label />}
              onSelectComponent={this.handleSelectComponent}
              options={api.label}
            />
          </div>
        </section>

        <section id="text" className="viewport">
          <div className="frame">
            <ExamplesBoard>
              <Text>Text</Text>
              <Text weight="medium">Text</Text>
              <Text weight="bold">Text</Text>
              <Text size="medium">Text</Text>
              <Text size="medium" weight="medium">
                Text
              </Text>
              <Text size="medium" weight="bold">
                Text
              </Text>
              <Text size="large">Text</Text>
              <Text size="large" weight="medium">
                Text
              </Text>
              <Text size="large" weight="bold">
                Text
              </Text>
              <Text size="xlarge">Text</Text>
              <Text size="xlarge" weight="medium">
                Text
              </Text>
              <Text size="xlarge" weight="bold">
                Text
              </Text>
            </ExamplesBoard>
            <Playground
              name="Text"
              component={<Text />}
              onSelectComponent={this.handleSelectComponent}
              options={api.text}
            />
          </div>
        </section>

        <section id="tip" className="viewport">
          <div className="frame">
            <ExamplesBoard>
              <Tip>Tip text</Tip>
              <Tip iconName="alert">Tip text with icon</Tip>
              <Tip iconName="alert" iconColor="blue">
                Tip text with icon
              </Tip>
            </ExamplesBoard>
            <Playground
              name="Tip"
              component={<Tip />}
              onSelectComponent={this.handleSelectComponent}
              options={api.tip}
            />
          </div>
        </section>

        <section id="icon" className="viewport">
          <div className="frame">
            <ExamplesBoard>
              <Icon name="alert" />
              <Icon name="alert" color="blue" />
              <Icon text="K" />
              <Icon text="K" />
              <Icon text="K" color="blue" isSelected onClick={console.log} />
              <Icon text="K" color="blue" isDisabled />
              <Icon
                text="K"
                color="blue"
                isSelected
                isDisabled
                onClick={console.log}
              />
            </ExamplesBoard>
            <Playground
              name="Icon"
              component={<Icon />}
              onSelectComponent={this.handleSelectComponent}
              options={api.icon}
            />
          </div>
        </section>
      </Layout>
    );
  }
}
