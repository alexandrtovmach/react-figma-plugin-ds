import * as React from "react";

type Icons = "adjust" | "alert";
type IconColors = "blue" | "white" | "black-3";

interface ButtonProps {
  children: React.Component;
  isSecondary?: boolean;
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

interface InputProps {
	placeholder: string;
	icon?: Icons;
	iconColor?: IconColors;
	defaultValue?: any;
	isDisabled?: boolean;
  onChange?: () => void;
}

interface IconProps {
	name: Icons;
	color?: IconColors;
	isSelected?: boolean;
	isDisabled?: boolean;
	text?: string;
  onClick?: () => void;
}

export {
  ButtonProps,
	CheckboxProps,
	DisclosureProps,
	InputProps,
	IconProps,
};