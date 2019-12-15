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

export const api = {
  button: [
    {
      name: "children",
      type: "text",
      defaultValue: "Button",
      isRequired: true
    },
    {
      name: "className",
      type: "text",
      defaultValue: ""
    },
    {
      name: "isSecondary",
      type: "switch",
      defaultValue: false
    },
    {
      name: "isDisabled",
      type: "switch",
      defaultValue: false
    },
    {
      name: "isDestructive",
      type: "switch",
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
      type: "text",
      defaultValue: "Toggle me",
      isRequired: true
    },
    {
      name: "className",
      type: "text",
      defaultValue: ""
    },
    {
      name: "isCheckbox",
      type: "switch",
      defaultValue: false
    },
    {
      name: "isDisabled",
      type: "switch",
      defaultValue: false
    },
    {
      name: "defaultValue",
      type: "switch",
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
      type: "text",
      defaultValue: "Disclosure content",
      isRequired: true
    },
    {
      name: "label",
      type: "text",
      defaultValue: "Disclosure",
      isRequired: true
    },
    {
      name: "className",
      type: "text",
      defaultValue: ""
    },
    {
      name: "isSection",
      type: "switch",
      defaultValue: false
    },
    {
      name: "isDefaultExpanded",
      type: "switch",
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
      type: "text",
      defaultValue: "Placeholder",
      isRequired: true
    },
    {
      name: "className",
      type: "text",
      defaultValue: ""
    },
    {
      name: "defaultValue",
      type: "text",
      defaultValue: ""
    },
    {
      name: "isDisabled",
      type: "switch",
      defaultValue: false
    },
    {
      name: "icon",
      type: "select",
      options: icons,
      defaultValue: ""
    },
    {
      name: "iconColor",
      type: "select",
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
      type: "text",
      defaultValue: "Placeholder text...",
      isRequired: true
    },
    {
      name: "cols",
      type: "number",
      defaultValue: 3,
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
      type: "text",
      defaultValue: ""
    },
    {
      name: "defaultValue",
      type: "text",
      defaultValue: ""
    },
    {
      name: "isDisabled",
      type: "switch",
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
      type: "text",
      defaultValue: "Placeholder text...",
      isRequired: true
    },
    {
      name: "options",
      defaultValue: [
        { value: 1, label: "Item 1" },
        { value: 2, label: "Item 2" }
      ],
      isRequired: true
    },
    {
      name: "className",
      type: "text",
      defaultValue: ""
    },
    {
      name: "defaultValue",
      type: "text",
      defaultValue: ""
    },
    {
      name: "isDisabled",
      type: "switch",
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
      type: "text",
      defaultValue: ""
    },
  ],
  title: [
    {
      name: "children",
      type: "text",
      defaultValue: "Title",
      isRequired: true
    },
    {
      name: "className",
      type: "text",
      defaultValue: ""
    },
    {
      name: "size",
      type: "select",
      options: sizes,
      defaultValue: ""
    },
    {
      name: "level",
      type: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      defaultValue: ""
    },
    {
      name: "weight",
      type: "select",
      options: weights,
      defaultValue: ""
    },
  ],
  label: [
    {
      name: "children",
      type: "text",
      defaultValue: "Label",
      isRequired: true
    },
    {
      name: "className",
      type: "text",
      defaultValue: ""
    },
    {
      name: "size",
      type: "select",
      options: sizes,
      defaultValue: ""
    },
    {
      name: "weight",
      type: "select",
      options: weights,
      defaultValue: ""
    },
  ],
  text: [
    {
      name: "children",
      type: "text",
      defaultValue: "Text",
      isRequired: true
    },
    {
      name: "className",
      type: "text",
      defaultValue: ""
    },
    {
      name: "size",
      type: "select",
      options: sizes,
      defaultValue: ""
    },
    {
      name: "weight",
      type: "select",
      options: weights,
      defaultValue: ""
    },
  ],
  tip: [
    {
      name: "children",
      type: "text",
      defaultValue: "Text tip",
      isRequired: true
    },
    {
      name: "className",
      type: "text",
      defaultValue: ""
    },
    {
      name: "iconName",
      type: "select",
      options: icons,
      defaultValue: ""
    },
    {
      name: "iconColor",
      type: "select",
      options: iconColors,
      defaultValue: ""
    },
  ],
  icon: [
    {
      name: "name",
      type: "select",
      options: icons,
      defaultValue: "alert",
      isRequired: true
    },
    {
      name: "className",
      type: "text",
      defaultValue: ""
    },
    {
      name: "color",
      type: "select",
      options: iconColors,
      defaultValue: ""
    },
    {
      name: "isSelected",
      type: "switch",
      defaultValue: false
    },
    {
      name: "isDisabled",
      type: "switch",
      defaultValue: false
    },
    {
      name: "text",
      type: "text",
      defaultValue: ""
    },
    {
      name: "onClick",
      type: "select",
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