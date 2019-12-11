import React from "react";
import { render } from "react-dom";

import ExamplePage from './ExamplePage';
import "./style.scss";

const App = () => (
  <ExamplePage />
);
render(<App />, document.getElementById("root"));
