import React from 'react';

import Header from '../Header';
import NavigationPanel from '../NavigationPanel';
import DetailsPanel from '../DetailsPanel';
import "./Layout.scss"

export default class Layout extends React.Component {
  constructor(props, context) {
    super(props, context);
 
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <>
				<Header />
				<div className="content">
					<NavigationPanel />
					<main className="main-content">{children}</main>
					<DetailsPanel />
				</div>
      </>
    );
  }
}