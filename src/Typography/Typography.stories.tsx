import React from "react";
import { Story, Meta } from "@storybook/react";
import { Typography, TypographyProps } from "./Typography";

export default {
  title: "Typography",
  component: Typography,
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Paragraph = Template.bind({});
Paragraph.args = {
  variant: "paragraph",
  children: "The quick brown fox jumps over the lazy dog",
};
