import React from 'react';

import { Button, Checkbox } from "../../dist";
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
				<section id="buttons" className="viewport">
					<div className="frame">
						<Button>Start</Button>
						<Button destructive>Start</Button>
						<Button destructive disabled>Start</Button>
						<Button secondary>Start</Button>
						<Button secondary destructive>Start</Button>
						<Button secondary destructive onClick={console.log}>Start</Button>
					</div>
				</section>

				<section id="checkbox" className="viewport">
					<div className="frame">
						<Checkbox
							defaultValue={true}
							checkbox
							label="Checkbox"
						/>
						<Checkbox
							label="Switch"
						/>
						<Checkbox
							onChange={console.log}
							label="with handler"
						/>
					</div>
				</section>
      </Layout>
    );
  }
}