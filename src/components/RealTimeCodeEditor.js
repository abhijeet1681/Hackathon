import React, { useState } from "react";
import "./RealTimeCodeEditor.css";

function RealTimeCodeEditor() {
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
    <div className="code-editor">
      <h1>✍️ Real-Time Code Editor</h1>
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

export default RealTimeCodeEditor;