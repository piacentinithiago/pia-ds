import type { Preview } from "@storybook/react";
import 'bootstrap/dist/css/bootstrap.min.css';

const preview: Preview = {
  parameters: {
    html: {
      prettier: {
        tabWidth: 2,
        useTabs: false,
        htmlWhitespaceSensitivity: "strict",
      },
      highlighter: {
        showLineNumbers: true,
        wrapLines: false,
      },
      removeComments: true,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

  },
};

export default preview;
