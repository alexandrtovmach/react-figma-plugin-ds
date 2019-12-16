import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import github from "prism-react-renderer/themes/github";

export default class CodePreview extends React.Component {
  render() {
    const { code } = this.props;
	
    return (
      code ? (
        <Highlight {...defaultProps} code={code} language="jsx" theme={github}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className}>
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
