import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MyButton from "../MyButton/MyButton";

export default {
  title: "Example/MyButton",
  component: MyButton,
} as ComponentMeta<typeof MyButton>;

const Template: ComponentStory<typeof MyButton> = (args) => (
  <MyButton {...args} />
);

export const RedBtn = Template.bind({});
RedBtn.args = {
  color: "red",
  children: "Текст кнопки",
};

export const OrangeBtn = Template.bind({});
OrangeBtn.args = {
  color: "orange",
  children: "Текст кнопки",
};

export const BigBtn = Template.bind({});
BigBtn.args = {
  color: "orange",
  children: "Текст кнопки",
  big: true,
};
