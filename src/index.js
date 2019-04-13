import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [fNmae, setName] = useState("Chris");

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input value={fNmae} onChange={e => setName((fNmae = e.target.value))} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
