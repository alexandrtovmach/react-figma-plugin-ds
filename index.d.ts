import * as React from "react";

type Icons = "adjust" | "alert";
type IconColors = "blue" | "white" | "black-3";

interface ButtonProps {
  children: React.Component;
	className?: string;
  isSecondary?: boolean;
  isDisabled?: boolean;
  isDestructive?: boolean;
  onClick?: () => void;
}

interface CheckboxProps {
  label: string;
	className?: string;
  isCheckbox?: boolean;
  isDisabled?: boolean;
  defaultValue?: boolean;
  onChange?: () => void;
}

interface DisclosureProps {
  children: React.Component;
  label: string;
	className?: string;
  isSection?: boolean;
  isDefaultExpanded?: boolean;
  onExpandChange?: (state: boolean) => void;
}

interface InputProps {
	placeholder: string;
	className?: string;
	defaultValue?: any;
	isDisabled?: boolean;
  onChange?: () => void;
}

interface InputWithIconProps extends InputProps {
	icon?: Icons;
	iconColor?: IconColors;
}

interface IconProps {
	name: Icons;
	className?: string;
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
	InputWithIconProps,
	IconProps,
};