import React from "react";
import { Story, Meta } from "@storybook/react";
import { Error, ErrorProps } from "./Error";

export default {
  title: "Error",
  component: Error,
} as Meta;

const Template: Story<ErrorProps> = (args) => <Error {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Error",
  iconSize: 48,
  confirmText: "Ok",
  children: <p>Any JSX content in here!</p>,
};
