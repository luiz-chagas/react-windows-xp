import React from "react";
import { Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { RadioButton, RadioButtonProps } from "./RadioButton";

export default {
  title: "RadioButton",
  component: RadioButton,
} as Meta;

export const Default = (args: RadioButtonProps) => <RadioButton {...args} />;
Default.args = {
  group: "group-1",
  id: "id-1",
  label: "Option 1",
};

export const Multiple = () => (
  <>
    <RadioButton
      onClick={action("onClick")}
      group="options"
      id="id-1"
      label="Option 1"
    />
    <RadioButton
      onClick={action("onClick")}
      disabled
      group="options"
      id="id-2"
      label="Option 2"
    />
    <RadioButton
      onClick={action("onClick")}
      group="options"
      id="id-3"
      label="Option 3"
      defaultChecked
    />
  </>
);
