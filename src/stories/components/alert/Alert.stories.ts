import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "./Alert";

const meta = {
  title: "Example/Alert",
  component: Alert,
  parameters: {
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    message: "This is a primary alert—check it out!",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    message: "This is a secondary alert—check it out!",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    message: "This is a success alert—check it out!",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    message: "This is a danger alert—check it out!",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    message: "This is a warning alert—check it out!",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    message: "This is an info alert—check it out!",
  },
};

export const Light: Story = {
  args: {
    variant: "light",
    message: "This is a light alert—check it out!",
  },
};

export const Dark: Story = {
  args: {
    variant: "dark",
    message: "This is a dark alert—check it out!",
  },
};
