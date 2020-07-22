import React from "react";
import { object, withKnobs } from "@storybook/addon-knobs";
import QueueBox from "../components/QueueBox";

export default {
  component: QueueBox,
  title: "QueueBox",
  decorators: [withKnobs],
};

export const Default = () => {
  const elements = object("elements", [
    { id: 1, value: "A" },
    { id: 2, value: "B" },
    { id: 3, value: "C" },
  ]);
  return <QueueBox elements={elements} />;
};
