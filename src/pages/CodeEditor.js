import React, { useState, useEffect } from 'react';

const CodeEditor = () => {
  const [logs, setLogs] = useState([]);
  const [code, setCode] = useState(`
    // Replace this text with your own text
    // between the quotation marks.

    const welcome = "Welcome";
    const site = "CodePortal.org";

    // Now run your code to see
    // a personalized message.

    console.log(
      \`\${welcome} to \${site}!\`
    );
  `);

  useEffect(() => {
    document.title = "JavaScript Online Code Editor | Онлайн редактор кода JavaScript | Օնլայն կոդի խմբագրիչ JavaScript";
  }, []);

const runCode = () => {
  try {
    const originalLog = console.log;
    let result = '';

    console.log = (message) => {
      try {
        result += message.toString() + '\n';
      } catch (error) {
        console.error(error);
        setLogs((prevLogs) => [...prevLogs, "Error"]);
        setLogs((prevLogs) => [...prevLogs, "Undefined"]);
      }
    };

    eval(code);
    console.log = originalLog; // восстановление оригинальной функции console.log

    setLogs((prevLogs) => [...prevLogs, <pre key={prevLogs.length}>{result}</pre>]);
  } catch (error) {
    console.error(error);
    setLogs((prevLogs) => [...prevLogs, "Error"]);
    setLogs((prevLogs) => [...prevLogs, "Undefined"]);
  }
};


  return (
    <div className="main-editor">
      <div className="code-editor-title">
        <h2>JavaScript Online Code Editor</h2>
      </div>
      <div className="code-editor-container">
        <div className="code-input">
          <button className="run-button" onClick={runCode}>Run Code</button>
          <textarea value={code} onChange={(e) => setCode(e.target.value)} rows={10} />
        </div>
        <div className="code-output">
          {logs.map((log, index) => (
            <p key={index}>{log}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
