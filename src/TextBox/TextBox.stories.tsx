import React from "react";
import { Meta } from "@storybook/react";
import { TextBox, TextBoxProps } from "./TextBox";

export default {
  title: "TextBox",
  component: TextBox,
} as Meta;

export const Default = (args: TextBoxProps) => <TextBox {...args} />;
Default.args = {
  id: "text-1",
  placeholder: "John Doe",
  label: "Your Name",
};
