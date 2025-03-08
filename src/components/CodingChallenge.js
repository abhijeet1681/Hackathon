import React, { useState } from "react";
import "./CodingChallenge.css";

function CodingChallenge() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const handleRunCode = () => {
    try {
      const result = eval(code); // WARNING: Replace with secure execution in production
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="coding-challenge">
      <h1>🧩 Coding Challenge</h1>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here..."
        className="code-input"
      />
      <button className="run-button" onClick={handleRunCode}>
        Run Code
      </button>
      <div className="output">
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default CodingChallenge;