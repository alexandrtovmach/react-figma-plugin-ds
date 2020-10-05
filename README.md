# react-figma-plugin-ds

[![npm](https://img.shields.io/npm/v/react-figma-plugin-ds?logo=npm&cacheSeconds=1800)](https://www.npmjs.com/package/react-figma-plugin-ds)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-figma-plugin-ds?cacheSeconds=1800)](https://www.npmjs.com/package/react-figma-plugin-ds)
[![npm](https://img.shields.io/npm/dt/react-figma-plugin-ds?cacheSeconds=1800)](https://www.npmjs.com/package/react-figma-plugin-ds)

React components of Figma design system based on [thomas-lowry/figma-plugin-ds](https://github.com/thomas-lowry/figma-plugin-ds).

[DEMO HERE](https://alexandrtovmach.github.io/react-figma-plugin-ds/)

## 🚀 Get Started

Follow these steps to start using React Figma components:

1. Installation:

   ```sh
   # with npm
   npm i react-figma-plugin-ds

   # with yarn
   yarn add react-figma-plugin-ds
   ```

2. Usage:

   ```jsx
   import React from "react";
   import { Disclosure, Tip, Title } from "react-figma-plugin-ds";
   import "react-figma-plugin-ds/styles/figma-plugin-ds.css";

   export default props => {
     return (
       <>
         <Title size="large" weight="bold">
           My plugin
         </Title>
         <Disclosure label="Get started">
           <Tip iconName="resolve">Install</Tip>
           <Tip iconName="play">Start</Tip>
           <Tip iconName="library">Read the docs</Tip>
         </Disclosure>
       </>
     );
   };
   ```
3. Discover all components with properties on [demo page](https://alexandrtovmach.github.io/react-figma-plugin-ds/). Each of that has playground and as result in top right corner you can easily copy final code.

## 📝 License

[MIT](https://github.com/alexandrtovmach/react-figma-plugin-ds/blob/master/LICENSE)
