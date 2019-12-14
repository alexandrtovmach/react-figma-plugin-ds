import React from "react";

import { TitleProps } from "../index";

const Title: React.SFC<TitleProps> = ({
  className = "",
  children,
  level = "h1",
  size = "small",
  weight = "normal"
}) => {
  switch (level) {
    case "h1":
      return (
        <h1
          className={`section-title type--pos-${size}-${weight} ${className}`}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`section-title type--pos-${size}-${weight} ${className}`}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`section-title type--pos-${size}-${weight} ${className}`}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={`section-title type--pos-${size}-${weight} ${className}`}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={`section-title type--pos-${size}-${weight} ${className}`}
        >
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={`section-title type--pos-${size}-${weight} ${className}`}
        >
          {children}
        </h6>
      );

    default:
      return (
        <h1
          className={`section-title type--pos-${size}-${weight} ${className}`}
        >
          {children}
        </h1>
      );
  }
};

export default Title;
