const path = require("path");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss"
  ],
  presets: [
    path.resolve(__dirname, "./next-preset.js")
  ]
}