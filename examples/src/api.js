const icons = [
  "adjust",
  "alert",
  "align-bottom",
  "align-middle",
  "align-top",
  "angle",
  "animated-fill",
  "arrow-left-right",
  "arrow-up-down",
  "blend-empty",
  "blend",
  "break",
  "close",
  "comment",
  "component",
  "corner-radius",
  "corners",
  "dist-horiz-spacing",
  "dist-vert-spacing",
  "draft",
  "effects",
  "ellipses",
  "eyedropper",
  "frame",
  "group",
  "hidden",
  "hyperlink",
  "image",
  "import",
  "instance",
  "layout-align-bottom",
  "layout-align-horiz-cent",
  "layout-align-left",
  "layout-align-right",
  "layout-align-top",
  "layout-align-vert-cent",
  "layout-grid-columns",
  "layout-grid-rows",
  "layout-grid-uniform",
  "library",
  "link-broken",
  "link-connected",
  "list-detailed",
  "list",
  "lock-unlocked",
  "lock",
  "mask",
  "minus",
  "node-connect",
  "play",
  "plus",
  "recent",
  "reset-instance",
  "resize-to-fit",
  "resolve-filled",
  "resolve",
  "restore",
  "return",
  "search-large",
  "search",
  "share",
  "smiley",
  "star-off",
  "star-on",
  "stroke-weight",
  "styles",
  "tidy-up-grid",
  "tidy-up-list-horiz",
  "tidy-up-list-vert",
  "timer",
  "trash",
  "type",
  "vector-handles",
  "visible",
  "warning"
];
const iconColors = ["blue", "white", "black-3"];
const sizes = ["small", "medium", "large", "xlarge"];
const weights = ["normal", "medium", "bold"];
const levels = ["h1", "h2", "h3", "h4", "h5", "h6"];

export const api = {
  button: [
    {
      name: "children",
      type: "string",
      defaultValue: "Button",
      isRequired: true
    },
    {
      name: "className",
      type: "string",
      defaultValue: ""
    },
    {
      name: "isSecondary",
      type: "boolean",
      defaultValue: false
    },
    {
      name: "isDisabled",
      type: "boolean",
      defaultValue: false
    },
    {
      name: "isLoading",
      type: "boolean",
      defaultValue: false
    },
    {
      name: "isDestructive",
      type: "boolean",
      defaultValue: false
    },
    {
      name: "onClick",
      type: "function",
      defaultValue: console.log
    }
  ],
  checkbox: [
    {
      name: "label",
      type: "string",
      defaultValue: "Toggle me",
      isRequired: true
    },
    {
      name: "className",
      type: "string",
      defaultValue: ""
    },
    {
      name: "isCheckbox",
      type: "boolean",
      defaultValue: false
    },
    {
      name: "isDisabled",
      type: "boolean",
      defaultValue: false
    },
    {
      name: "defaultValue",
      type: "boolean",
			isDisabled: true,
      defaultValue: false
    },
    {
      name: "onChange",
      type: "function",
      defaultValue: console.log
    }
  ],
  disclosure: [
    {
      name: "children",
      type: "string",
      defaultValue: "Disclosure content",
      isRequired: true
    },
    {
      name: "label",
      type: "string",
      defaultValue: "Disclosure",
      isRequired: true
    },
    {
      name: "className",
      type: "string",
      defaultValue: ""
    },
    {
      name: "isSection",
      type: "boolean",
      defaultValue: false
    },
    {
      name: "isDefaultExpanded",
      type: "boolean",
			isDisabled: true,
      defaultValue: false
    },
    {
      name: "onExpand",
      type: "function",
      defaultValue: console.log
    }
  ],
  input: [
    {
      name: "placeholder",
      type: "string",
      defaultValue: "Placeholder",
      isRequired: true
    },
    {
      name: "className",
      type: "string",
      defaultValue: ""
    },
    {
      name: "defaultValue",
      type: "string",
      defaultValue: ""
    },
    {
      name: "isDisabled",
      type: "boolean",
      defaultValue: false
    },
    {
      name: "icon",
      type: "Icons",
      options: icons,
      defaultValue: ""
    },
    {
      name: "iconColor",
      type: "IconColors",
      options: iconColors,
      defaultValue: ""
    },
    {
      name: "onChange",
      type: "function",
      defaultValue: console.log
    }
  ],
  textarea: [
    {
      name: "placeholder",
      type: "string",
      defaultValue: "Placeholder text...",
      isRequired: true
    },
    {
      name: "rows",
      type: "number",
      defaultValue: 2,
      isRequired: true
    },
    {
      name: "className",
      type: "string",
      defaultValue: ""
    },
    {
      name: "defaultValue",
      type: "string",
      defaultValue: ""
    },
    {
      name: "isDisabled",
      type: "boolean",
      defaultValue: false
    },
    {
      name: "onChange",
      type: "function",
      defaultValue: console.log
    }
  ],
  select: [
    {
      name: "placeholder",
      type: "string",
      defaultValue: "Placeholder text...",
      isRequired: true
    },
    {
      name: "options",
			type: "SelectOption[]",
      defaultValue: [
        { value: 1, label: "Item 1" },
        { value: 2, label: "Item 2" }
      ],
      isRequired: true
    },
    {
      name: "className",
      type: "string",
      defaultValue: ""
    },
    {
      name: "defaultValue",
      type: "string",
			isDisabled: true,
      defaultValue: ""
    },
    {
      name: "isDisabled",
      type: "boolean",
      defaultValue: false
    },
    {
      name: "onExpand",
      type: "function",
      defaultValue: console.log
    },
    {
      name: "onChange",
      type: "function",
      defaultValue: console.log
    }
  ],
  divider: [
    {
      name: "className",
      type: "string",
      defaultValue: ""
    },
  ],
  title: [
    {
      name: "children",
      type: "string",
      defaultValue: "Title",
      isRequired: true
    },
    {
      name: "className",
      type: "string",
      defaultValue: ""
    },
    {
      name: "size",
      type: "Sizes",
      options: sizes,
      defaultValue: ""
    },
    {
      name: "level",
      type: "Levels",
      options: levels,
      defaultValue: ""
    },
    {
      name: "weight",
      type: "Weights",
      options: weights,
      defaultValue: ""
    },
  ],
  label: [
    {
      name: "children",
      type: "string",
      defaultValue: "Label",
      isRequired: true
    },
    {
      name: "className",
      type: "string",
      defaultValue: ""
    },
    {
      name: "size",
      type: "Sizes",
      options: sizes,
      defaultValue: ""
    },
    {
      name: "weight",
      type: "Weights",
      options: weights,
      defaultValue: ""
    },
  ],
  text: [
    {
      name: "children",
      type: "string",
      defaultValue: "Text",
      isRequired: true
    },
    {
      name: "className",
      type: "string",
      defaultValue: ""
    },
    {
      name: "size",
      type: "Sizes",
      options: sizes,
      defaultValue: ""
    },
    {
      name: "weight",
      type: "Weights",
      options: weights,
      defaultValue: ""
    },
  ],
  tip: [
    {
      name: "children",
      type: "string",
      defaultValue: "Text tip",
      isRequired: true
    },
    {
      name: "className",
      type: "string",
      defaultValue: ""
    },
    {
      name: "iconText",
      type: "string",
      defaultValue: ""
    },
    {
      name: "iconName",
      type: "Icons",
      options: icons,
      defaultValue: ""
    },
    {
      name: "iconColor",
      type: "IconColors",
      options: iconColors,
      defaultValue: ""
    },
  ],
  icon: [
    {
      name: "name",
      type: "Icons",
      options: icons,
      defaultValue: "alert",
      isRequired: true
    },
    {
      name: "className",
      type: "string",
      defaultValue: ""
    },
    {
      name: "color",
      type: "IconColors",
      options: iconColors,
      defaultValue: ""
    },
    {
      name: "isSelected",
      type: "boolean",
      defaultValue: false
    },
    {
      name: "isDisabled",
      type: "boolean",
      defaultValue: false
    },
    {
      name: "string",
      type: "string",
      defaultValue: ""
    },
    {
      name: "onClick",
      type: "function",
      options: [
        {
          label: "without onClick",
          value: null
        },
        {
          label: "with onClick (Icon become a Button)",
          value: console.log
        },
      ],
      defaultValue: null
    }
  ],
};