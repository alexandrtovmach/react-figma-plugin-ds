import * as React from "react";

type Icons =
  | "adjust"
  | "alert"
  | "align-bottom"
  | "align-middle"
  | "align-top"
  | "angle"
  | "animated-fill"
  | "arrow-left-right"
  | "arrow-up-down"
  | "blend-empty"
  | "blend"
  | "break"
  | "close"
  | "comment"
  | "component"
  | "corner-radius"
  | "corners"
  | "dist-horiz-spacing"
  | "dist-vert-spacing"
  | "draft"
  | "effects"
  | "ellipses"
  | "eyedropper"
  | "frame"
  | "group"
  | "hidden"
  | "hyperlink"
  | "image"
  | "import"
  | "instance"
  | "layout-align-bottom"
  | "layout-align-horiz-cent"
  | "layout-align-left"
  | "layout-align-right"
  | "layout-align-top"
  | "layout-align-vert-cent"
  | "layout-grid-columns"
  | "layout-grid-rows"
  | "layout-grid-uniform"
  | "library"
  | "link-broken"
  | "link-connected"
  | "list-detailed"
  | "list"
  | "lock-unlocked"
  | "lock"
  | "mask"
  | "minus"
  | "node-connect"
  | "play"
  | "plus"
  | "recent"
  | "reset-instance"
  | "resize-to-fit"
  | "resolve-filled"
  | "resolve"
  | "restore"
  | "return"
  | "search-large"
  | "search"
  | "share"
  | "smiley"
  | "star-off"
  | "star-on"
  | "stroke-weight"
  | "styles"
  | "tidy-up-grid"
  | "tidy-up-list-horiz"
  | "tidy-up-list-vert"
  | "timer"
  | "trash"
  | "type"
  | "vector-handles"
  | "visible"
  | "warning";
type IconColors = "blue" | "white" | "black-3";
type Sizes = "small" | "medium" | "large" | "xlarge";
type Weights = "normal" | "medium" | "bold";

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
  onChange?: (value: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface DisclosureProps {
  children: React.Component;
  label: string;
  className?: string;
  isSection?: boolean;
  isDefaultExpanded?: boolean;
  onExpand?: (state: boolean) => void;
}

interface InputProps {
  placeholder: string;
  className?: string;
  type?: "text" | "number" | "password";
  defaultValue?: any;
  isDisabled?: boolean;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface InputWithIconProps extends InputProps {
  icon?: Icons;
  iconColor?: IconColors;
}

interface TextareaProps {
  placeholder: string;
  cols: number;
  rows: number;
  className?: string;
  defaultValue?: any;
  isDisabled?: boolean;
  onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
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

interface DividerProps {
  className?: string;
}

interface TitleProps {
  children: React.Component;
  className?: string;
  size: Sizes;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  weight: Weights;
}

interface LabelProps {
  children: React.Component;
  className?: string;
  size: Sizes;
  weight: Weights;
}

interface TextProps {
  children: React.Component;
  className?: string;
  size: Sizes;
  weight: Weights;
}

interface TipProps {
  children: React.Component;
  className?: string;
  iconName?: Icons;
  iconColor: IconColors;
}

interface SelectOption {
  divider: string | boolean;
  value: string | number | boolean;
  label: string
}
interface SelectProps {
  options: SelectOption[];
  placeholder: string;
  className?: string;
  defaultValue?: string | number | boolean;
  onExpand?: (state: boolean) => void;
  onChange?: (option: SelectOption) => void;
}

export {
  ButtonProps,
  CheckboxProps,
  DisclosureProps,
  InputProps,
  InputWithIconProps,
  IconProps,
  DividerProps,
  TitleProps,
  LabelProps,
  TextProps,
  TipProps,
  TextareaProps,
  SelectProps,
  SelectOption,
};
