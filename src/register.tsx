import * as React from "react";
import { types, addons } from "@storybook/manager-api";

import { ADDON_ID, PANEL_ID, PARAM_KEY } from "./constants";
import { CssResourcePanel } from "./css-resource-panel";

addons.register(ADDON_ID, (api) => {
  // Need to cast as any as it's not matching Addon type, to investigate
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "CSS resources",
    render: ({ active }) => <CssResourcePanel key={PANEL_ID} api={api} active={active} />,
    paramKey: PARAM_KEY
  });
});
