import React from 'react';

import { Button } from '../../../../dist';
import "./Header.scss"

export default class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
 
    this.state = {};
  }

  render() {
    return (
			<>
				<header className="header">
					<div></div>
					<div>
						React Figma Plugin / Examples
					</div>
					<div>
						<Button>GitHub</Button>
					</div>
				</header>
				<div className="header-compensator"></div>
			</>
    );
  }
}