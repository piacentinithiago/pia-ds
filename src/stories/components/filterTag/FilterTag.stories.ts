
// como gerar o storybook do componente filterTag para eu usar mais de um componente na mesma página

// Path: src/stories/components/filterTag/FilterTag.stories.ts
// Compare this snippet from src/stories/components/button/Button.stories.ts:
import type { Meta, StoryObj } from '@storybook/react';

import FilterTag from './FilterTag';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

const meta = {
  title: 'Example/FilterTag',
  component: FilterTag,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof FilterTag>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary: Story = {
  args: {
    label: 'filter tag',
  },
};













// import { Meta, StoryObj } from '@storybook/react';
// import FilterTag from './FilterTag';

// const meta = {
//   title: 'Example/FilterTag',
//   component: FilterTag,
//   parameters: {
//     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
//     layout: 'centered',
//   },
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
//   tags: ['autodocs'],
//   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as Meta<typeof FilterTag>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// export const Primary: Story = {
//   args: {
//     label: 'filter tag',
//   },
// };
