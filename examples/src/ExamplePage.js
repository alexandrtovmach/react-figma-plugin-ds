import React from 'react';

import { Button } from "../../dist";

export default class ExaplePage extends React.Component {
  constructor(props, context) {
    super(props, context);
 
    this.state = {};
  }

  render() {
    const { } = this.state;
    return (
      <div className="viewport">
        <Button>Start</Button>
        <Button destructive>Start</Button>
        <Button destructive disabled>Start</Button>
        <Button secondary>Start</Button>
        <Button secondary destructive>Start</Button>
        <Button secondary destructive disabled>Start</Button>
      </div>
    );
  }
}