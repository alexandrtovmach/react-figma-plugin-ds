import React from "react";

import CodePreview from '../CodePreview';
import "./DetailsPanel.scss";
import { Text, Divider } from "../../../../dist";

export default class DetailsPanel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return <aside className="details-panel">
      <header>
        <Text weight="medium">
          React Code
        </Text>
      </header>
      <Divider />
      <Text className="codeblock">
        <CodePreview
          code={this.props.componentCode}
        />
      </Text>
		</aside>;
  }
}
