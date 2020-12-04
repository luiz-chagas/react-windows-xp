import React from "react";
import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button Text",
};
