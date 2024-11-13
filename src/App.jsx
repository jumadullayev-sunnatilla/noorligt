import { useState } from "react";
import "./App.css";
import Router from "./router/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
