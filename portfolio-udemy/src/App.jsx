import { useState } from "react";
import "./App.css";
import Curriculum from "./components/Curriculum";
import MisRutas from "./router/MisRutas";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="layout">
      <MisRutas />
    </div>
  );
}

export default App;
