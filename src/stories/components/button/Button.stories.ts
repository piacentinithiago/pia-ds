import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    variant: "secondary",
  },
};

export const Success: Story = {
  args: {
    label: "Button",
    variant: "success",
  },
};

export const Danger: Story = {
  args: {
    label: "Button",
    variant: "danger",
  },
};

export const Warning: Story = {
  args: {
    label: "Button",
    variant: "warning",
  },
};

export const Info: Story = {
  args: {
    label: "Button",
    variant: "info",
  },
};

export const Light: Story = {
  args: {
    label: "Button",
    variant: "light",
  },
};

export const Dark: Story = {
  args: {
    label: "Button",
    variant: "dark",
  },
};

export const Small: Story = {
  args: {
    label: "Button",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    label: "Button",
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    label: "Button",
    disabled: true,
  },
};
