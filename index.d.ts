import * as React from "react";

interface ButtonProps {
  children: React.Component;
  secondary: boolean;
  disabled?: boolean;
  destructive?: boolean;
}

export {
  ButtonProps
};