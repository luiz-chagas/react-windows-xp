import React from "react";
import { Meta } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
} as Meta;

export const Default = (args: CheckboxProps) => <Checkbox {...args} />;

Default.args = {
  children: "This is a checkbox",
  id: "checkbox-1",
};
