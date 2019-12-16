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

interface BasicProps {
  className?: string;
}
interface ButtonProps extends BasicProps {
  children: React.Component;
  isSecondary?: boolean;
  isDisabled?: boolean;
  isDestructive?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface CheckboxProps extends BasicProps {
  label: string;
  isCheckbox?: boolean;
  isDisabled?: boolean;
  defaultValue?: boolean;
  onChange?: (
    value: boolean,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

interface DisclosureProps extends BasicProps {
  children: React.Component;
  label: string;
  isSection?: boolean;
  isDefaultExpanded?: boolean;
  onExpand?: (state: boolean) => void;
}

interface InputProps extends BasicProps {
  placeholder: string;
  type?: "text" | "number" | "password";
  defaultValue?: any;
  isDisabled?: boolean;
  onChange?: (
    value: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

interface InputWithIconProps extends InputProps, BasicProps {
  icon?: Icons;
  iconColor?: IconColors;
}

interface TextareaProps extends BasicProps {
  placeholder: string;
  rows: number;
  defaultValue?: any;
  isDisabled?: boolean;
  onChange?: (
    value: string,
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

interface SelectOption {
  divider: string | boolean;
  value: string | number | boolean;
  label: string;
}
interface SelectProps extends BasicProps {
  options: SelectOption[];
  placeholder: string;
  isDisabled?: boolean;
  defaultValue?: string | number | boolean;
  onExpand?: (state: boolean) => void;
  onChange?: (option: SelectOption) => void;
}

interface DividerProps extends BasicProps {}

interface TitleProps extends BasicProps {
  children: React.Component;
  size?: Sizes;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  weight?: Weights;
}

interface LabelProps extends BasicProps {
  children: React.Component;
  size?: Sizes;
  weight?: Weights;
}

interface TextProps extends BasicProps {
  children: React.Component;
  size?: Sizes;
  weight?: Weights;
}

interface TipProps extends BasicProps {
  children: React.Component;
  iconName?: Icons;
  iconColor: IconColors;
}

interface IconProps extends BasicProps {
  name: Icons;
  color?: IconColors;
  isSelected?: boolean;
  isDisabled?: boolean;
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
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
  SelectOption
};
