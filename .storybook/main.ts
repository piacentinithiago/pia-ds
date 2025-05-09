import type { StorybookConfig } from'@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx','../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-styling'
  ],

  framework: {
    name:'@storybook/nextjs',
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
export default config;
