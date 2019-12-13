import * as React from "react";

interface ButtonProps {
  children: React.Component;
  isSecondary: boolean;
  isDisabled?: boolean;
  isDestructive?: boolean;
  onClick?: () => void;
}

interface CheckboxProps {
  label: string;
  isCheckbox?: boolean;
  isDisabled?: boolean;
  defaultValue?: boolean;
  onChange?: () => void;
}

interface DisclosureProps {
  children: React.Component;
  label: string;
  isSection?: boolean;
  isDefaultExpanded?: boolean;
  onExpandChange?: (state: boolean) => void;
}

export {
  ButtonProps,
	CheckboxProps,
	DisclosureProps
};