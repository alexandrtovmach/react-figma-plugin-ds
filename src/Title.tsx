import React from "react";

import { TitleProps } from "../index";

const Title: React.FunctionComponent<TitleProps> = ({
  className,
  children,
  level,
  size,
  weight,
}) => {
  className = className || "";
  level = level || "h1";
  const sizeClass = size && `type--${size}`;
  const weightClass = weight && `type--${weight}`;
  const headerClassName = `section-title ${sizeClass} ${weightClass} ${className}`;

  switch (level) {
    case "h1":
      return <h1 className={headerClassName}>{children}</h1>;
    case "h2":
      return <h2 className={headerClassName}>{children}</h2>;
    case "h3":
      return <h3 className={headerClassName}>{children}</h3>;
    case "h4":
      return <h4 className={headerClassName}>{children}</h4>;
    case "h5":
      return <h5 className={headerClassName}>{children}</h5>;
    case "h6":
      return <h6 className={headerClassName}>{children}</h6>;

    default:
      return <h1 className={headerClassName}>{children}</h1>;
  }
};

export default Title;
