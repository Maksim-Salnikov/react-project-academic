import React from "react";
import { createRoot } from "react-dom/client";
import SafeSpaceApp from "./App";

it("renders withot crushing", () => {
  const container = document.createElement("div");
  const root = createRoot(container);
  root.render(<SafeSpaceApp tab="home" />);
  root.unmount();
});
