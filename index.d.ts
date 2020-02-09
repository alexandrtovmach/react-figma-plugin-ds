import * as React from "react";

export type Icons =
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

export type IconColors = "blue" | "white" | "black-3";

export type Sizes = "small" | "medium" | "large" | "xlarge";

export type Weights = "normal" | "medium" | "bold";

export type Levels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface BasicProps {
  className?: string;
}

export interface ButtonProps extends BasicProps {
  children: any;
  isSecondary?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isDestructive?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export declare const Button: React.SFC<ButtonProps>;

export interface CheckboxProps extends BasicProps {
  label: string;
  isCheckbox?: boolean;
  isDisabled?: boolean;
  defaultValue?: boolean;
  onChange?: (
    value: boolean,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export declare const Checkbox: React.SFC<CheckboxProps>;

export interface DisclosureProps extends BasicProps {
  children: any;
  label: string;
  isSection?: boolean;
  isDefaultExpanded?: boolean;
  onExpand?: (state: boolean) => void;
}

export interface DisclosureState {
  isExpanded: boolean;
}

export declare class Disclosure extends React.Component<
  DisclosureProps,
  DisclosureState
> {}

export interface InputProps extends BasicProps {
  placeholder: string;
  type?: "text" | "number" | "password";
  defaultValue?: any;
  isDisabled?: boolean;
  onChange?: (
    value: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export interface InputWithIconProps extends InputProps, BasicProps {
  icon?: Icons;
  iconColor?: IconColors;
}

export declare const Input: React.SFC<InputWithIconProps>;

export interface TextareaProps extends BasicProps {
  placeholder: string;
  rows: number;
  defaultValue?: any;
  isDisabled?: boolean;
  onChange?: (
    value: string,
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export declare const Textarea: React.SFC<TextareaProps>;

export interface SelectOption {
  divider: string | boolean;
  value: string | number | boolean;
  label: string;
}

export interface SelectProps extends BasicProps {
  options: SelectOption[];
  placeholder: string;
  isDisabled?: boolean;
  defaultValue?: string | number | boolean;
  onExpand?: (state: boolean) => void;
  onChange?: (option: SelectOption) => void;
}

export interface SelectState {
  isExpanded: boolean;
  selectedOption?: SelectOption;
}

export declare class Select extends React.Component<SelectProps, SelectState> {}

export interface DividerProps extends BasicProps {}

export declare const Divider: React.SFC<DividerProps>;

export interface TextProps extends BasicProps {
  children: any;
  size?: Sizes;
  weight?: Weights;
}

export declare const Text: React.SFC<TextProps>;

export interface TitleProps extends BasicProps, TextProps {
  level?: Levels;
}

export declare const Title: React.SFC<TitleProps>;

export interface LabelProps extends BasicProps, TextProps {}

export declare const Label: React.SFC<LabelProps>;

export interface TipProps extends BasicProps {
  children: any;
  iconText?: string;
  iconName?: Icons;
  iconColor: IconColors;
}

export declare const Tip: React.SFC<TipProps>;

export interface IconProps extends BasicProps {
  name: Icons;
  color?: IconColors;
  isSelected?: boolean;
  isDisabled?: boolean;
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export declare const Icon: React.SFC<IconProps>;
