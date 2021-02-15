import "./styles.css";
import { useState } from "react";
export default function App() {
  const [mode, setMode] = useState("light");
  return (
    <div className={mode}>
      <button
        onClick={() => {
          mode === "light" ? setMode("dark") : setMode("light");
        }}
      >
        {mode}
      </button>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="card">
        <h3>This is Title</h3>
        <p> This is card with some content</p>
      </div>
    </div>
  );
}
