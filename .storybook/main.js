const path = require("path");

module.exports = {
  stories: ["../global/components/**/*.stories.tsx"],
  addons: ["@storybook/preset-typescript"],
  // Add nextjs preset
  presets: [path.resolve(__dirname, "./next-preset.js")],
};
