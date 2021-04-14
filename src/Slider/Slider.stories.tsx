import React from "react";
import { Story, Meta } from "@storybook/react";
import { Slider, SliderProps } from "./Slider";

export default {
  title: "Slider",
  component: Slider,
} as Meta;

const Template: Story<SliderProps> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "test-slider",
  min: 0,
  max: 100,
  defaultValue: 50,
  label: "Volume",
};
