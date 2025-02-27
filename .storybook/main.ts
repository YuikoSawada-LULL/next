import type { StorybookConfig } from '@storybook/nextjs';
import path from "path";
import { Configuration } from "webpack";

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],

  "addons": [
    {
      "name": "@storybook/addon-essentials",
      "options": {
        "docs": true,
        "controls": true,
        "actions": true,
        "backgrounds": true,
        "toolbars": true,
        "viewport": true
      }
    },
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-storysource"
  ],

  "framework": {
    "name": "@storybook/nextjs",
    "options": {}
  },

  "staticDirs": [
    "..\\public"
  ],

  webpackFinal: async (config: Configuration) => {
    if (config.resolve) {
        config.resolve.alias = {
            ...config.resolve.alias,
            "@": path.resolve(__dirname, "../src"),
        };
    }
    return config;
  },

  docs: {
    autodocs: true
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
  
};
export default config;