const path = require('path')

module.exports = {
  "stories": [
    "../renderer/src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../renderer/src/templates/**/*.stories.@(js|jsx|ts|tsx)",
    "../renderer/lib/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss"
  ],
  webpackFinal: async (config) => {
    // CSS Modules
    // refer: https://gist.github.com/justincy/b8805ae2b333ac98d5a3bd9f431e8f70

    // First we prevent webpack from using Storybook CSS rules to process CSS modules
    config.module.rules.find(
      rule => rule.test.toString() === '/\\.css$/'
    ).exclude = /\.module\.css$/;

    // Then we tell webpack what to do with CSS modules
    config.module.rules.push({
      test: /\.module\.css$/,
      include: path.resolve(__dirname, '../renderer'),
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true
          }
        }
      ]
    });

    return config
  },
}