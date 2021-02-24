import React from "react";
import { Meta } from "@storybook/react";
import { Dropdown, DropdownProps, DropdownOption } from "./Dropdown";

export default {
  title: "Dropdown",
  component: Dropdown,
} as Meta;

export const Default = (args: DropdownProps) => (
  <Dropdown {...args} defaultValue="option-3">
    <DropdownOption id="option-1">First option</DropdownOption>
    <DropdownOption id="option-2">Second option</DropdownOption>
    <DropdownOption id="option-3">Third option</DropdownOption>
    <DropdownOption id="option-4">Fourth Option</DropdownOption>
    <DropdownOption id="option-5">Fifth Option</DropdownOption>
  </Dropdown>
);
Default.args = {};
