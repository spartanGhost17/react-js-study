import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import JSXRules from "./JSXRules.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <JSXRules />
  </StrictMode>
);
