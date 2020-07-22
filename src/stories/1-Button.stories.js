import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  component: Button,
  title: "Button",
  decorators: [withKnobs],
};

export const withText = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const withEmoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const addonKnob = () => (
  <Button onClick={action("clicked")}>
    {text("Button Label", "Button Label")}
  </Button>
);
