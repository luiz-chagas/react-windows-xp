import React from "react";
import { Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Dropdown, DropdownProps, DropDownOptionProps } from "./Dropdown";

export default {
  title: "Dropdown",
  component: Dropdown,
} as Meta;

export const Default = (args: DropdownProps) => (
  <Dropdown {...args}>
    <Dropdown.Option id="option-1">First option</Dropdown.Option>
    <Dropdown.Option id="option-2">Second option</Dropdown.Option>
    <Dropdown.Option defaultSelected id="option-3">
      Third option
    </Dropdown.Option>
    <Dropdown.Option id="option-4">Fourth Option</Dropdown.Option>
    <Dropdown.Option id="option-5">Fifth Option</Dropdown.Option>
  </Dropdown>
);
Default.args = {};
