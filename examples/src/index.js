import React from "react";
import { render } from "react-dom";

import ExamplePage from './ExamplePage';

const App = () => (
  <ExamplePage />
);
render(<App />, document.getElementById("root"));
