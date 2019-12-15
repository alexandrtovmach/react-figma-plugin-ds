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
    },
  ]
}