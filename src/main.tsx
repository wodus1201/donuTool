import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "@/styles/index.css";
import App from "@/App";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <App />
  </HashRouter>
);
