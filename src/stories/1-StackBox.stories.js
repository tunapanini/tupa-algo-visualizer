import React from "react";
import { object, withKnobs } from "@storybook/addon-knobs";
import StackBox from "../components/StackBox";

export default {
  component: StackBox,
  title: "StackBox",
  decorators: [withKnobs],
};

export const Default = () => {
  const elements = object("elements", [
    { id: 1, value: "A" },
    { id: 2, value: "B" },
    { id: 3, value: "C" },
  ]);
  return <StackBox elements={elements} />;
};
