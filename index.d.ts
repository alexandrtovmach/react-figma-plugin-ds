import * as React from "react";

type Icons =
  | "adjust"
  | "alert"
  | "align-bottom"
  | "align-middle"
  | "align-top"
  | "angle"
  | "animated-fill"
  | "arrow-left-righ"
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

interface DividerProps {
  className?: string;
}

interface SectionProps {
  children: React.Component;
  className?: string;
}

interface LabelProps {
  children: React.Component;
  className?: string;
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

export {
  ButtonProps,
  CheckboxProps,
  DisclosureProps,
  InputProps,
  InputWithIconProps,
  IconProps,
  DividerProps,
  SectionProps,
  LabelProps,
  TextProps,
  TipProps
};
