import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

export default class CodePreview extends React.Component {
  render() {
    const { code } = this.props;
	
    return (
      code ? (
        <Highlight {...defaultProps} code={code} language="jsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      ) : "Select component"
    );
  }
}
