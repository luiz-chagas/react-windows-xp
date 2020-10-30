import React from "react";
import { Story, Meta } from "@storybook/react";
import { Wallpaper, WallpaperProps } from "./Wallpaper";

export default {
  title: "Wallpaper",
  component: Wallpaper,
} as Meta;

const Template: Story<WallpaperProps> = (args) => <Wallpaper {...args} />;

export const Default = Template.bind({});
Default.args = {
  fullScreen: false,
};
