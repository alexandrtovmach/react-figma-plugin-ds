import React from "react";
import { render } from "react-dom";

import ExamplePage from './ExamplePage';
import "./reset.scss"

const App = () => (
  <ExamplePage />
);
render(<App />, document.getElementById("root"));
