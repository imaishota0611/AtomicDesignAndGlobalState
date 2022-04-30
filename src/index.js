//import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import ReactDom from "react-dom";

//const rootElement = document.getElementById("root");
//const root = createRoot(rootElement);

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
