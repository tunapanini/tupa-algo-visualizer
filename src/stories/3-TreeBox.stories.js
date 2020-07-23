import React from "react";
import { object, withKnobs } from "@storybook/addon-knobs";
import TreeBox from "../components/TreeBox";

export default {
  component: TreeBox,
  title: "TreeBox",
  decorators: [withKnobs],
};

export const Default = () => {
  const tree = object("tree", {
    root: {
      id: 1,
      value: "1",
      children: [
        { id: 2, value: "1-1", children: [] },
        {
          id: 3,
          value: "1-2",
          children: [
            { id: 4, value: "1-2-1", children: [] },
            { id: 5, value: "1-2-2", children: [] },
          ],
        },
      ],
    },
    visited: [1, 2],
  });
  return <TreeBox tree={tree} />;
};
