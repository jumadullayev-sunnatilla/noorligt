import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./context/index.jsx";
import { initialState, reducer } from "./context/reduser.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </BrowserRouter>
);
