module.exports = {
  "stories": [
    // "../stories/**/*.stories.mdx",
    "../renderer/src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../renderer/src/templates/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}