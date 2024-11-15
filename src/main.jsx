import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./context/index.jsx";
import { initialState, reduser } from "./context/reduser.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StateProvider reduser={reduser} initilalState={initialState}>
      <App />
    </StateProvider>
  </BrowserRouter>
);
