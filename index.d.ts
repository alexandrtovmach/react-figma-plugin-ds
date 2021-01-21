import React, { Ref } from "react";

export type Icons =
  | "adjust"
  | "alert"
  | "angle"
  | "arrow-left-right"
  | "up-down"
  | "auto-layout-horizontal"
  | "auto-layout-vertical"
  | "back"
  | "blend-empty"
  | "blend"
  | "break"
  | "caret-down"
  | "caret-left"
  | "caret-right"
  | "caret-up"
  | "check"
  | "close"
  | "component"
  | "corner-radius"
  | "corners"
  | "distribute-horizontal-spacing"
  | "distribute-vertical-spacing"
  | "draft"
  | "effects"
  | "ellipses"
  | "eyedropper"
  | "forward"
  | "frame"
  | "group"
  | "hidden"
  | "horizontal-padding"
  | "hyperlink"
  | "image"
  | "instance"
  | "key"
  | "layout-align-bottom"
  | "align-horizontal-centers"
  | "align-left"
  | "align-right"
  | "align-top"
  | "align-vertical-centers"
  | "layout-grid-columns"
  | "layout-grid-rows"
  | "layout-grid-uniform"
  | "library"
  | "link-broken"
  | "link-connected"
  | "list-detailed"
  | "list-tile"
  | "list"
  | "lock-off"
  | "lock-on"
  | "minus"
  | "play"
  | "plus"
  | "random"
  | "recent"
  | "resize-to-fit"
  | "resolve-filled"
  | "resolve"
  | "reverse"
  | "search-large"
  | "search"
  | "settings"
  | "share"
  | "smiley"
  | "sort-alpha-asc"
  | "sort-alpha-dsc"
  | "sort-top-bottom"
  | "spacing"
  | "spinner"
  | "star-off"
  | "star-on"
  | "stroke-weight"
  | "styles"
  | "swap"
  | "theme"
  | "tidy-up-grid"
  | "tidy-up-list-horizontal"
  | "tidy-up-list-vertical"
  | "timer"
  | "trash"
  | "vertical-padding"
  | "visible"
  | "warning-large"
  | "warning";

export type IconColors =
  | "blue"
  | "purple"
  | "purple4"
  | "hot-pink"
  | "green"
  | "red"
  | "yellow"
  | "black"
  | "black8"
  | "black3"
  | "white"
  | "white8"
  | "white4";

export type Sizes = "small" | "large" | "xlarge";

export type Weights = "medium" | "bold";

export type Levels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type CheckboxTypes = "checkbox" | "switch" | "radio";

export interface BasicProps {
  className?: string;
}

export interface ButtonProps extends BasicProps {
  children: any;
  isSecondary?: boolean;
  isTertiary?: boolean;
  isDisabled?: boolean;
  isDestructive?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export declare const Button: React.FunctionComponent<ButtonProps>;

export interface CheckboxProps extends BasicProps {
  id?: string;
  label: string;
  type?: CheckboxTypes;
  isDisabled?: boolean;
  defaultValue?: boolean;
  name?: string;
  onChange?: (
    value: boolean,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  ref?: Ref<HTMLInputElement>;
}

export declare const Checkbox: React.FunctionComponent<CheckboxProps>;

export interface DisclosureProps extends BasicProps {
  children: any;
  label: string;
  isSection?: boolean;
  isDefaultExpanded?: boolean;
  onExpand?: (state: boolean) => void;
}

export declare const Disclosure: React.FunctionComponent<DisclosureProps>;

export interface InputProps extends BasicProps {
  placeholder: string;
  type?: "text" | "number" | "password";
  defaultValue?: any;
  isDisabled?: boolean;
  onChange?: (
    value: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  name?: string;
  ref?: Ref<HTMLInputElement>;
}

export interface InputWithIconProps extends InputProps, BasicProps {
  icon?: Icons;
  iconColor?: IconColors;
}

export declare const Input: React.FunctionComponent<InputWithIconProps>;

export interface TextareaProps extends BasicProps {
  placeholder: string;
  rows: number;
  defaultValue?: any;
  isDisabled?: boolean;
  onChange?: (
    value: string,
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  name?: string;
  ref?: Ref<HTMLTextAreaElement>;
}

export declare const Textarea: React.FunctionComponent<TextareaProps>;

export interface SelectOption {
  divider?: string | boolean;
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

export declare const Select: React.FunctionComponent<SelectProps>;

export interface TextProps extends BasicProps {
  children: any;
  size?: Sizes;
  weight?: Weights;
}

export declare const Text: React.FunctionComponent<TextProps>;

export interface TitleProps extends BasicProps, TextProps {
  level?: Levels;
}

export declare const Title: React.FunctionComponent<TitleProps>;

export interface LabelProps extends BasicProps, TextProps {}

export declare const Label: React.FunctionComponent<LabelProps>;

export interface TipProps extends BasicProps {
  children: any;
  iconText?: string;
  iconName?: Icons;
  iconColor: IconColors;
}

export declare const Tip: React.FunctionComponent<TipProps>;

export interface IconProps extends BasicProps {
  name: Icons;
  color?: IconColors;
  isSelected?: boolean;
  isDisabled?: boolean;
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export declare const Icon: React.FunctionComponent<IconProps>;
