import React from 'react';

import { Button } from "../../dist";
import Layout from "./components/Layout";

export default class ExaplePage extends React.Component {
  constructor(props, context) {
    super(props, context);
 
    this.state = {};
  }

  render() {
    const { } = this.state;
    return (
      <Layout>
        <Button>Start</Button>
        <Button destructive>Start</Button>
        <Button destructive disabled>Start</Button>
        <Button secondary>Start</Button>
        <Button secondary destructive>Start</Button>
        <Button secondary destructive disabled>Start</Button>
      </Layout>
    );
  }
}