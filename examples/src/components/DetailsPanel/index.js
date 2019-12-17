import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import CodePreview from "../CodePreview";
import "./DetailsPanel.scss";
import { Text, Divider, Icon } from "../../../../dist";

export default class DetailsPanel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
			copied: false
		};
		this.handleCopyCode = this.handleCopyCode.bind(this);
  }

	componentDidUpdate(prevProps) {
		if (prevProps.componentCode !== this.props.componentCode) {
			this.setState({
				copied: false
			})
		}
	}

	handleCopyCode() {
		this.setState({
			copied: true
		})
	}

  render() {
		const { copied } = this.state;
    return (
      <aside className="details-panel">
        <header>
          <Text weight="medium">React Code</Text>
					<CopyToClipboard
            text={this.props.componentCode}
            onCopy={this.handleCopyCode}
          >
						<div title="copy to clipboard">
							<Icon name="draft" color={copied? "blue": ""} title="Copy" />
						</div>
          </CopyToClipboard>
        </header>
        <div className="type type--pos-small-normal codeblock">
          <CodePreview code={this.props.componentCode} />
        </div>
      </aside>
    );
  }
}
