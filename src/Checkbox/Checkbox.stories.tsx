import React from "react";
import { Meta } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
} as Meta;

export const Default = (args: CheckboxProps) => <Checkbox {...args} />;
Default.args = {
  label: "This is a checkbox",
  id: "checkbox-1",
  defaultChecked: true,
};
