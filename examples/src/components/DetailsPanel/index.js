import React from "react";

import CodePreview from '../CodePreview';
import "./DetailsPanel.scss";

export default class DetailsPanel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return <aside className="details-panel">
			<CodePreview
				code={this.props.componentCode}
			/>
		</aside>;
  }
}
