import React from "react";
import { object, withKnobs } from "@storybook/addon-knobs";
import TableBox from "../components/TableBox";

export default {
  component: TableBox,
  title: "TableBox",
  decorators: [withKnobs],
};

export const Default = () => {
  const table = object("table", [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]);
  return <TableBox table={table} />;
};
