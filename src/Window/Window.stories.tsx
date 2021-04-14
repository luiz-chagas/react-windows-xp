import React from "react";
import { Story, Meta } from "@storybook/react";
import { Window, WindowProps } from "./Window";

export default {
  title: "Window",
  component: Window,
} as Meta;

const Template: Story<WindowProps> = (args) => <Window {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Default Window",
  children: <p>Any JSX content in here!</p>,
};
